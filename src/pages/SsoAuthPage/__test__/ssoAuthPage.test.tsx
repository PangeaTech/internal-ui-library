import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import SsoAuthPage from '../SsoAuthPage';

describe('Microsoft SSO Authentication Page', () => {
  it('should render Microsoft SSO authentication button', async () => {
    render(<SsoAuthPage buttonLabel="Login with Microsoft" logoUrl="https://via.placeholder.com/150" onLogin={() => 'user-token'} />);

    const loginButton = screen.getByText('Login with Microsoft');

    fireEvent.click(loginButton);

    await waitFor(() => {
      // Add assertions for successful SSO login and redirection
      expect(loginButton).toBeInTheDocument();
    });
  });
});
