import React, { ChangeEvent } from "react";
import { TextField, MenuItem } from "@mui/material";

export interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
