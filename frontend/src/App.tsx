import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';

import { LoginPage } from '@/pages/auth/LoginPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}>
        <LoginPage />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
