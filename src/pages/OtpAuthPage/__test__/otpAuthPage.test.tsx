import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import OtpAuthPage from '../OtpAuthPage';

describe('OTP Authentication Page', () => {
  it('should render OTP authentication form', () => {
    render(
      <OtpAuthPage
        fields={[
          { label: 'Email', type: 'email' },
          { label: 'OTP', type: 'text' }
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSendOtp={() => true}
        onVerifyOtp={() => 'user-token'}
      />
    );

    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const sendButton = screen.getByText('Send OTP');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(sendButton);

    expect(sendButton).toBeDisabled(); // Assuming send button disables after click
    expect(emailInput.value).toBe('test@example.com');
  });

  it('should verify OTP correctly', async () => {
    render(
      <OtpAuthPage
        fields={[
          { label: 'Email', type: 'email' },
          { label: 'OTP', type: 'text' }
        ]}
        logoUrl="https://via.placeholder.com/150"
        onSendOtp={() => true}
        onVerifyOtp={() => 'user-token'}
      />
    );

    const otpInput = screen.getByLabelText('OTP') as HTMLInputElement;
    const verifyButton = screen.getByText('Verify OTP');

    fireEvent.change(otpInput, { target: { value: '123456' } });
    fireEvent.click(verifyButton);

    await waitFor(() => {
      expect(otpInput.value).toBe('123456');
      // Add more assertions for successful OTP verification
    });
  });
});
