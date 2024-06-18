import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import UsernamePasswordAuthPage, { ITraditionalAuthPageProps } from '../TraditionalAuthPage';

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
} as Meta<ITraditionalAuthPageProps>;

export const LoginMode: StoryObj<ITraditionalAuthPageProps> = {
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

export const SignupMode: StoryObj<ITraditionalAuthPageProps> = {
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

export const ForgotPasswordMode: StoryObj<ITraditionalAuthPageProps> = {
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
