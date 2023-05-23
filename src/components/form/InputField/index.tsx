import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = Omit<TextFieldProps, 'onChange' | 'onBlur' | 'inputRef' | 'value'> & {
  name: string;
  control: Control<any>;
};

export const InputField: React.FC<InputFieldProps> = ({ name, control, ...props }) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <TextField
      id={name}
      fullWidth
      size="small"
      name={field.name}
      value={field.value}
      inputRef={field.ref}
      onBlur={field.onBlur}
      onChange={field.onChange}
      helperText={fieldState.error?.message}
      error={Boolean(fieldState.error?.message)}
      {...props}
    />
  );
};
