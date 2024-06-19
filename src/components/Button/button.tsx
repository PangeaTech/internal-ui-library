import React from "react";
import { default as MUIButton, ButtonProps } from "@mui/material/Button";

// Define custom prop types
export interface IButtonProps extends ButtonProps {
  text?: string;
}

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
  return <MUIButton {...props}>{text}</MUIButton>;
};

export default Button;
