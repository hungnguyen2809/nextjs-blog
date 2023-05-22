import { LoginForm, LoginFormData } from '@/components/auth';
import { Seo } from '@/components/common';
import { ROUTES } from '@/layout';
import { Box, Container, Typography } from '@mui/material';

function LoginPage() {
  const handleSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Container sx={{ p: 5 }}>
      <Seo
        data={{
          title: 'Login | Learn NextJS | Hung Nguyen',
          description: 'Login page authentication',
          url: `${process.env.HOST_URL}${ROUTES.LOGIN}`,
          thumbnailUrl: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />

      <Typography component="h1" variant="h5" fontWeight="medium">
        Login Page
      </Typography>

      <Box mt={10}>
        <LoginForm onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
}

export default LoginPage;
