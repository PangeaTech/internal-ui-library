import React, { FC } from "react";
import TextField, { ITextFieldProps } from "../textField";

const Example: FC<ITextFieldProps> = ({
  placeholder = "Type Here",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TextField
        placeholder={placeholder}
      />
    </div>
  );
};

export default Example;
