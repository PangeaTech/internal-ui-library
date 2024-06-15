import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import OtpAuthPage, { OtpAuthPageProps } from '../otpAuthPage';

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
} as Meta<OtpAuthPageProps>;

export const Default: StoryObj<OtpAuthPageProps> = {
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
