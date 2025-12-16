import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Form, Input, Typography } from 'antd';
import { Controller } from 'react-hook-form';

import { useLoginForm } from '@/hooks/useLoginForm.ts';

const { Title, Text } = Typography;

export const LoginForm = () => {
  // Викликаємо хук і отримуємо все необхідне
  const { control, errors, isLoading, errorMessage, contextHolder, submitForm } = useLoginForm();

  return (
    <Card style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      {contextHolder}

      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Title level={2} style={{ marginBottom: 0 }}>
          Welcome Back
        </Title>
        <Text type="secondary">Please sign in to continue</Text>
      </div>

      {errorMessage && (
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}

      <Form layout="vertical" onFinish={submitForm}>
        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                prefix={<MailOutlined />}
                placeholder="email@example.com"
                disabled={isLoading}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                size="large"
                prefix={<LockOutlined />}
                placeholder="12345"
                disabled={isLoading}
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
