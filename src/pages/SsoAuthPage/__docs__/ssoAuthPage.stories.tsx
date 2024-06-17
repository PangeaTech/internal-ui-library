import { Meta, StoryObj } from '@storybook/react';

import SsoAuthPage, { SsoAuthPageProps } from '../SsoAuthPage';

export default {
  title: 'Auth/MicrosoftSsoAuthPage',
  component: SsoAuthPage,
  parameters: {
    docs: {
      description: {
        component: 'Component for Microsoft Single Sign-On (SSO) authentication.'
      }
    }
  }
} as Meta<SsoAuthPageProps>;

export const Default: StoryObj<SsoAuthPageProps> = {
  args: {
    buttonLabel: 'Login with Microsoft',
    logoUrl: 'https://via.placeholder.com/150',
    onLogin: () => {
      alert('Logged in with Microsoft');
      return 'user-token';
    }
  }
};
