import React from "react";

import AuthPage from "../AuthPage";

const AuthPageExample = () => {
  const handleSubmit = (data: { [key: string]: string }): boolean => {
    alert(`Data submitted: ${JSON.stringify(data)}`);
    return true;
  };

  return (
    <>
      <AuthPage
        mode="login"
        fields={[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
      <AuthPage
        mode="signup"
        fields={[
          { label: "Username", type: "text" },
          { label: "Password", type: "password" },
          { label: "Email", type: "email" },
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
      <AuthPage
        mode="forgotPassword"
        fields={[{ label: "Email", type: "email" }]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AuthPageExample;
