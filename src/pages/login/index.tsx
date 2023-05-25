import { LoginForm, LoginFormData } from '@/components/auth';
import { Seo } from '@/components/common';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/layout';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function LoginPage() {
  const router = useRouter();
  const { login } = useAuth({ revalidateOnMount: false });

  const handleSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
      router.replace(ROUTES.HOME);
    } catch (error: any) {
      if (error?.response?.data) {
        toast.error(error.response.data.message || 'Đã có lỗi sảy ra, vui lòng thử lại sau');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Box pt={10} minHeight="100vh" bgcolor="whitesmoke">
      <Seo
        data={{
          title: 'Login | Learn NextJS | Hung Nguyen',
          description: 'Login page authentication',
          url: `${process.env.HOST_URL}${ROUTES.LOGIN}`,
          thumbnailUrl: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />

      <Paper elevation={4} sx={{ mx: 'auto', p: 4, maxWidth: '480px' }}>
        <Typography component="h1" variant="h5" fontWeight="medium" align="center" mb={3}>
          Login Page
        </Typography>

        <LoginForm onSubmit={handleSubmit} />
      </Paper>
    </Box>
  );
}

export default LoginPage;
