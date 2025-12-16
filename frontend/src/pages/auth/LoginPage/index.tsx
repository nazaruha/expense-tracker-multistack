import './styles.css';

import { Layout } from 'antd';

import { LoginForm } from '@/components/auth/LoginForm';
import { ColorEnum } from '@/constants/color.ts';

const { Content } = Layout;

export const LoginPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        className="contentContainer"
        style={{
          background: ColorEnum.WHITESMOKE,
        }}
      >
        <LoginForm />
      </Content>
    </Layout>
  );
};
