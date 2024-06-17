import { Button } from '@mui/material';
import React from 'react';

export interface ISsoAuthPageProps {
  buttonLabel: string;
  logoUrl: string;
  onLogin: () => string;
}

const SsoAuthPage: React.FC<ISsoAuthPageProps> = ({ buttonLabel, logoUrl, onLogin }) => {
  const handleLogin = () => {
    const token = onLogin();
    if (token) {
      //   navigate('/home', { state: { token } });
    }
  };

  return (
    <div className="w-vw h-vh flex flex-col justify-center items-center border-[2px] border-spacing-2">
      <img src={logoUrl} alt="Logo" className="mb-4" />
      <Button onClick={handleLogin} variant="contained" color="primary">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default SsoAuthPage;
