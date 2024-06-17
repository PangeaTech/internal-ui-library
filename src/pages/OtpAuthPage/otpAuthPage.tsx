import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface Field {
  label: string;
  type: string;
}

export interface IOtpAuthPageProps {
  fields: Field[];
  logoUrl: string;
  onSendOtp: (email: string) => boolean;
  onVerifyOtp: (otp: string) => string;
}

const OtpAuthPage: React.FC<IOtpAuthPageProps> = ({ fields, logoUrl, onSendOtp, onVerifyOtp }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (onSendOtp(email)) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    const token = onVerifyOtp(otp);
    if (token) {
      // navigate('/home', { state: { token } });
    }
  };

  return (
    <div className="w-vw h-vh flex flex-col justify-center items-center border-[2px] border-spacing-2">
      <img src={logoUrl} alt="Logo" className="mb-4" />
      {fields.map((field, index) => (
        <TextField
          key={index}
          label={field.label}
          type={field.type}
          value={field.label === 'Email' ? email : otp}
          onChange={(e) => field.label === 'Email' ? setEmail(e.target.value) : setOtp(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      ))}
        <Button onClick={handleSendOtp} variant="contained" color="primary" disabled={otpSent}>
          Send OTP
        </Button>
        <Button onClick={handleVerifyOtp} variant="contained" color="secondary" className="mt-4" disabled={!otpSent}>
          Verify OTP
        </Button>
    </div>
  );
}

export default OtpAuthPage;
