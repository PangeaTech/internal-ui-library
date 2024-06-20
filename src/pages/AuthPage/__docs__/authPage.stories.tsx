import { Meta, StoryObj } from "@storybook/react";

import AuthPage, { IAuthPageProps } from "../AuthPage";

export default {
  title: "Auth/AuthPage",
  component: AuthPage,
  parameters: {
    docs: {
      description: {
        component: "Component for username and password authentication.",
      },
    },
  },
} as Meta<IAuthPageProps>;

export const LoginMode: StoryObj<IAuthPageProps> = {
  args: {
    mode: "login",
    fields: [
      { label: "Username", type: "text" },
      { label: "Password", type: "password" },
    ],
    logoUrl: "https://via.placeholder.com/150",
    onSubmit: (data) => {
      alert(`Login data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};

export const SignupMode: StoryObj<IAuthPageProps> = {
  args: {
    mode: "signup",
    fields: [
      { label: "Username", type: "text" },
      { label: "Password", type: "password" },
      { label: "Email", type: "email" },
    ],
    logoUrl: "https://via.placeholder.com/150",
    onSubmit: (data) => {
      alert(`Signup data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};

export const ForgotPasswordMode: StoryObj<IAuthPageProps> = {
  args: {
    mode: "forgotPassword",
    fields: [{ label: "Email", type: "email" }],
    logoUrl: "https://via.placeholder.com/150",
    onSubmit: (data) => {
      alert(`Forgot Password data: ${JSON.stringify(data)}`);
      return true;
    },
  },
};
