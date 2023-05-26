import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = Omit<TextFieldProps, 'inputRef' | 'value'> & {
  name: string;
  control: Control<any>;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  onBlur: externalOnBlur,
  onChange: externalOnChange,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control });

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    field.onBlur();
    externalOnBlur?.(event);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onChange(event);
    externalOnChange?.(event);
  };

  return (
    <TextField
      id={name}
      fullWidth
      size="small"
      onBlur={onBlur}
      name={field.name}
      value={field.value}
      onChange={onChange}
      inputRef={field.ref}
      helperText={fieldState.error?.message}
      error={Boolean(fieldState.error?.message)}
      {...props}
    />
  );
};
