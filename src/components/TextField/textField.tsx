import React, { ChangeEvent, useState } from 'react';
import { BaseTextFieldProps, TextField as MUITextField } from '@mui/material';

export interface ITextFieldProps extends Omit<BaseTextFieldProps,'onChange'> {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
}

const TextField: React.FC<ITextFieldProps> = ({ label, value, onChange, ...props }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    onChange(event);
  };

  return (
    <MUITextField
      label={label}
      value={internalValue}
      onChange={handleChange}
      {...props}
    />
  );
};

export default TextField;
