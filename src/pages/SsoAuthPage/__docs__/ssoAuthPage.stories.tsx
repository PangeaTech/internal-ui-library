import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MicrosoftSsoAuthPage, { ISsoAuthPageProps } from '../SsoAuthPage';

export default {
  title: 'Auth/MicrosoftSsoAuthPage',
  component: MicrosoftSsoAuthPage,
  parameters: {
    docs: {
      description: {
        component: 'Component for Microsoft Single Sign-On (SSO) authentication.',
      },
    },
  },
} as Meta<ISsoAuthPageProps>;

export const Default: StoryObj<ISsoAuthPageProps> = {
  args: {
    buttonLabel: 'Login with Microsoft',
    logoUrl: 'https://via.placeholder.com/150',
    onLogin: () => {
      alert('Logged in with Microsoft');
      return 'user-token';
    },
  },
};
