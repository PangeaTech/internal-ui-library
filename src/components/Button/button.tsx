import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

// Define custom prop types
export interface IButtonProps extends ButtonProps {
  text?: string;
}

const CustomButton: React.FC<IButtonProps> = ({ text, ...props }) => {
  return (
    <Button {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
