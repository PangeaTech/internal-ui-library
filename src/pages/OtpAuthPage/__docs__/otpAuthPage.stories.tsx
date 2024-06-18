import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OtpAuthPage, { IOtpAuthPageProps } from '../otpAuthPage';

export default {
  title: 'Auth/OtpAuthPage',
  component: OtpAuthPage,
  parameters: {
    docs: {
      description: {
        component: 'Component for OTP verification via email.',
      },
    },
  },
} as Meta<IOtpAuthPageProps>;

export const Default: StoryObj<IOtpAuthPageProps> = {
  args: {
    fields: [
      { label: 'Email', type: 'email' },
      { label: 'OTP', type: 'text' },
    ],
    logoUrl: 'https://via.placeholder.com/150',
    onSendOtp: (email) => {
      alert(`OTP sent to ${email}`);
      return true;
    },
    onVerifyOtp: (otp) => {
      alert(`OTP verified: ${otp}`);
      return 'user-token';
    },
  },
};
