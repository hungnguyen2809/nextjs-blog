import { InputField } from '@/components/form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export type LoginFormData = {
  username: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { username: '', password: '' },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField name="username" control={control} placeholder="Username" sx={{ mb: 2 }} />
      <br />
      <InputField
        sx={{ mb: 2 }}
        name="password"
        control={control}
        placeholder="Password"
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

      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
};
