import React from "react";

import UsernamePasswordAuthPage from "../AuthPage";

const UsernamePasswordAuthPageExample = () => {
  const handleSubmit = (data: { [key: string]: string }): boolean => {
    alert(`Data submitted: ${JSON.stringify(data)}`);
    return true;
  };

  return (
    <>
      <UsernamePasswordAuthPage
        mode="login"
        fields={[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
      <UsernamePasswordAuthPage
        mode="signup"
        fields={[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
          { label: "Email", type: "email" },
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
      <UsernamePasswordAuthPage
        mode="forgotPassword"
        fields={[{ label: "Email", type: "email" }]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default UsernamePasswordAuthPageExample;
