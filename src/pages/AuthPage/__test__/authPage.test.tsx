import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthPage from '../AuthPage';

describe('Username Password Authentication Page', () => {
  it('should render username/password authentication form', async () => {
    render(
      <AuthPage
        mode="login"
        fields={[
          { label: 'Username', type: 'text' },
          { label: 'Password', type: 'password' },
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSubmit={(data) => true}
      />
    );

    const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(usernameInput.value).toBe('testuser');
      expect(passwordInput.value).toBe('password123');
      // Add more assertions for successful login
    });
  });
});
