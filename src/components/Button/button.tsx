import { ButtonProps, default as MuiButton } from '@mui/material/Button';
import React from 'react';

// Define custom prop types
export interface IButtonProps extends ButtonProps {
  text?: string;
}

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
  return <MuiButton {...props}>{text}</MuiButton>;
};

export default Button;
