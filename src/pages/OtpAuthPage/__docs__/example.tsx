import React from 'react';
import OtpAuthPage from '../OtpAuthPage';

const OtpAuthPageExample = () => {
  const handleSendOtp = (email: string): boolean => {
    alert(`OTP sent to ${email}`);
    return true;
  };

  const handleVerifyOtp = (otp: string): string => {
    alert(`OTP verified: ${otp}`);
    return 'user-token';
  };

  return (
    <OtpAuthPage
      fields={[{ label: 'Email', type: 'email' }, { label: 'OTP', type: 'text' }]}
      logoUrl="https://via.placeholder.com/150"
      onSendOtp={handleSendOtp}
      onVerifyOtp={handleVerifyOtp}
    />
  );
};

export default OtpAuthPageExample;
