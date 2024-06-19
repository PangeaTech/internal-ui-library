import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Example Dropdown",
    options: ["Option 1", "Option 2", "Option 3"],
    value: "",
    onChange: (e) => console.log(e.target.value),
  },
};
