import { InputField } from '@/components/form';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

type LoginFormData = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { username: '', password: '' },
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField name="username" control={control} placeholder="Username" />
      <br />
      <InputField name="password" control={control} placeholder="Password" />

      <br />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
};
