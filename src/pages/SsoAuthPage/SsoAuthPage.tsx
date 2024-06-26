import React from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

export interface MicrosoftSsoAuthPageProps {
  buttonLabel: string;
  logoUrl: string;
  onLogin: () => string;
}

const MicrosoftSsoAuthPage: React.FC<MicrosoftSsoAuthPageProps> = ({ buttonLabel, logoUrl, onLogin }) => {
//   const navigate = useNavigate();

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
}

export default MicrosoftSsoAuthPage;
