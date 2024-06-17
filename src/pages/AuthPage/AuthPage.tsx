import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface Field {
  label: string;
  type: string;
}

export interface IAuthPageProps {
  mode: 'login' | 'signup' | 'forgotPassword';
  fields: Field[];
  logoUrl: string;
  onSubmit: (data: { [key: string]: string }) => boolean;
}

const AuthPage: React.FC<IAuthPageProps> = ({ mode, fields, logoUrl, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (label: string, value: string) => {
    setFormData({ ...formData, [label]: value });
  };

  const handleSubmit = () => {
    if (onSubmit(formData)) {
      if (mode === 'login') {
        // navigate('/home');
        console.log('login')
      } else {
        alert('Operation successful');
      }
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
          value={formData[field.label] || ''}
          onChange={(e) => handleChange(field.label, e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      ))}
      <Button onClick={handleSubmit} variant="contained" color="primary">
        {mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : 'Reset Password'}
      </Button>
    </div>
  );
}

export default AuthPage;
