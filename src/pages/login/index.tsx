import { LoginForm } from '@/components/auth';
import { Container, Typography } from '@mui/material';

function LoginPage() {
  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Container>
      <Typography component="h1" variant="h5">
        Login Page
      </Typography>

      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default LoginPage;
