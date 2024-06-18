import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MicrosoftSsoAuthPage from "../SsoAuthPage";

describe("Microsoft SSO Authentication Page", () => {
  it("should render Microsoft SSO authentication button", async () => {
    render(
      <MicrosoftSsoAuthPage
        buttonLabel="Login with Microsoft"
        logoUrl="https://via.placeholder.com/150"
        onLogin={() => "user-token"}
      />,
    );

    const loginButton = screen.getByText("Login with Microsoft");

    fireEvent.click(loginButton);

    await waitFor(() => {
      // Add assertions for successful SSO login and redirection
      expect(loginButton).toBeInTheDocument();
    });
  });
});
