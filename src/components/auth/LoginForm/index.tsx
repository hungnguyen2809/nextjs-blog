import { InputField } from '@/components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type LoginFormData = {
  username: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (data: LoginFormData) => Promise<void>;
};

const schema = yup.object({
  username: yup.string().required('Username is required').min(4, 'Username has min 4 characters'),
  password: yup.string().required('Password is required').min(6, 'Username has min 6 characters'),
});

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' },
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField name="username" control={control} label="Username" sx={{ mb: 2 }} />

      <InputField
        sx={{ mb: 2 }}
        name="password"
        control={control}
        label="Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        fullWidth
        type="submit"
        sx={{ mt: 3 }}
        variant="contained"
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color="inherit" size={20} /> : undefined}
      >
        Login
      </Button>
    </Box>
  );
};
