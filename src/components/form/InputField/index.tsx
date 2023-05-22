import { TextField } from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps {
  name: string;
  label?: string;
  control: Control<any>;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ name, label, control, placeholder }) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <TextField
      id={name}
      label={label}
      ref={field.ref}
      name={field.name}
      value={field.value}
      variant="standard"
      onBlur={field.onBlur}
      onChange={field.onChange}
      placeholder={placeholder}
    />
  );
};
