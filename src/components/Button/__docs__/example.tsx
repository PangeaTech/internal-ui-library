import React, { FC } from "react";
import Button, { IButtonProps } from "../button";

const Example: FC<IButtonProps> = ({ text = "Button" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button text={text} />
    </div>
  );
};

export default Example;
