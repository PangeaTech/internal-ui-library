import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Example TextField",
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};
