import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "design-system";

type Story = StoryObj<typeof Input>;
const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  args: { defaultValue: "Hello, world!", type: "text" },
};

export const Disabled: Story = {
  args: { ...Base.args, disabled: true },
};

export const Error: Story = {
  args: { ...Base.args, "aria-invalid": true },
};

export const Placeholder: Story = {
  args: { type: "text", placeholder: "Hello, world!" },
};

export const Large: Story = {
  args: { ...Base.args, className: "text-lg" },
};

export const Date: Story = {
  args: { ...Base.args, type: "date" },
};

export const Search: Story = {
  args: { ...Base.args, type: "search" },
};

export const Password: Story = {
  args: { ...Base.args, type: "password" },
};
