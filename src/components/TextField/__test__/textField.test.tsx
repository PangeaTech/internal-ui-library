import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TextField from "../TextField";

describe("TextField component", () => {
  it("TextField should render correctly", () => {
    render(<TextField />);
    const text_field = screen.getByRole("textbox");
    expect(text_field).toBeInTheDocument();
  });
});
