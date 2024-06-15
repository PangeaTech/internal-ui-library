import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UsernamePasswordAuthPage, { UsernamePasswordAuthPageProps } from '../traditionalAuthPage';

export default {
  title: 'Auth/UsernamePasswordAuthPage',
  component: UsernamePasswordAuthPage,
  parameters: {
    docs: {
      description: {
        component: 'Component for username and password authentication.',
      },
    },
  },
} as Meta<UsernamePasswordAuthPageProps>;

export const LoginMode: StoryObj<UsernamePasswordAuthPageProps> = {
  args: {
    mode: 'login',
    fields: [
      { label: 'Username', type: 'text' },
      { label: 'Password', type: 'password' },
    ],
    logoUrl: 'https://via.placeholder.com/150',
    onSubmit: (data) => {
      alert(`Login data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};

export const SignupMode: StoryObj<UsernamePasswordAuthPageProps> = {
  args: {
    mode: 'signup',
    fields: [
      { label: 'Username', type: 'text' },
      { label: 'Password', type: 'password' },
      { label: 'Email', type: 'email' },
    ],
    logoUrl: 'https://via.placeholder.com/150',
    onSubmit: (data) => {
      alert(`Signup data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};

export const ForgotPasswordMode: StoryObj<UsernamePasswordAuthPageProps> = {
  args: {
    mode: 'forgotPassword',
    fields: [
      { label: 'Email', type: 'email' },
    ],
    logoUrl: 'https://via.placeholder.com/150',
    onSubmit: (data) => {
      alert(`Forgot Password data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};
