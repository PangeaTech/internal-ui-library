import React from "react";
import MicrosoftSsoAuthPage from "../SsoAuthPage";

const MicrosoftSsoAuthPageExample = () => {
  const handleLogin = (): string => {
    alert("Logged in with Microsoft");
    return "user-token";
  };

  return (
    <MicrosoftSsoAuthPage
      buttonLabel="Login with Microsoft"
      logoUrl="https://via.placeholder.com/150"
      onLogin={handleLogin}
    />
  );
};

export default MicrosoftSsoAuthPageExample;
