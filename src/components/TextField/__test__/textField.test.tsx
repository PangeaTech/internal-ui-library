import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from '../TextField';

describe('TextField component', () => {
  it('should render correctly', () => {
    render(<TextField label="Test Label" value="" onChange={() => {}} />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
  });

  it('should update value on change', () => {
    const handleChange = vi.fn();
    render(<TextField label="Test Label" value="" onChange={handleChange} />);
    const input = screen.getByLabelText('Test Label');

    fireEvent.change(input, { target: { value: 'New Value' } });

    // Check that the onChange handler is called
    expect(handleChange).toHaveBeenCalledTimes(1);

    // Check the value passed to the onChange handler
    const event = handleChange.mock.calls[0][0];
    expect(event.target.value).toBe('New Value');

    // Verify that the input value is updated
    expect(input).toHaveValue('New Value');
  });
});
