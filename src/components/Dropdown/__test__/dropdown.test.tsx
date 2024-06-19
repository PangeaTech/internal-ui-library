import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("Dropdown component", () => {
  it("should render correctly", () => {
    render(
      <Dropdown
        label="Test Label"
        options={["Option 1", "Option 2"]}
        value=""
        onChange={() => {}}
      />,
    );
    const select = screen.getByLabelText("Test Label");
    expect(select).toBeInTheDocument();
  });

  it("should update value on change", () => {
    const handleChange = vi.fn();
    render(
      <Dropdown
        label="Test Label"
        options={["Option 1", "Option 2"]}
        value=""
        onChange={handleChange}
      />,
    );
    const select = screen.getByLabelText("Test Label");

    // Simulate opening the dropdown and selecting an option
    fireEvent.mouseDown(select);
    const option = screen.getByText("Option 1");
    fireEvent.click(option);

    // Check that the onChange handler is called
    expect(handleChange).toHaveBeenCalledTimes(1);

    // Check the value passed to the onChange handler
    const event = handleChange.mock.calls[0][0];
    expect(event.target.value).toBe("Option 1");
  });
});
