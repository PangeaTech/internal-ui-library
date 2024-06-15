import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

// Define custom prop types
export interface ITextFieldProps extends BaseTextFieldProps {
  placeholder?: string;
}

const CustomTextField: React.FC<ITextFieldProps> = ({ placeholder, ...props }) => {
  return (
    <TextField {...props}/>
  );
};

export default CustomTextField;
