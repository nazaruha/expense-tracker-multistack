import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { login } from '@/features/api/auth';
import { LoginFormData, loginSchema } from '@/schemas/login.schema.ts';

export const useLoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  // 1. Налаштування форми
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'user@test.com',
      password: 'password123',
    },
  });

  // 2. Логіка запиту
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Login success:', data);
      localStorage.setItem('token', data.token);
      messageApi.success(`Welcome back, ${data.user.email}!`);
      setErrorMessage(null);
    },
    onError: (error) => {
      setErrorMessage(error.message || 'Something went wrong');
      messageApi.error('Login failed');
    },
  });

  // 3. Обробник сабміту
  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  // Повертаємо тільки те, що потрібно UI компоненту
  return {
    control,
    errors,
    isLoading: mutation.isPending,
    errorMessage,
    contextHolder, // Для тостів AntD
    submitForm: handleSubmit(onSubmit), // Готова функція для <Form onFinish={...}>
  };
};
