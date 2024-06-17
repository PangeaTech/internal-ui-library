import React from 'react';
import  { BaseTextFieldProps, default as MuiTextField } from '@mui/material/TextField';

// Define custom prop types
export interface ITextFieldProps extends BaseTextFieldProps {
  placeholder?: string;
}

const TextField: React.FC<ITextFieldProps> = ({ placeholder, ...props }) => {
  return (
    <MuiTextField {...props}/>
  );
};

export default TextField;
