import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "design-system";

type Story = StoryObj<typeof Select>;
const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  args: {},
  render: ({ ...args }) => (
    <Select {...args}>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Select>
  ),
};

export const Disabled: Story = {
  ...Base,
  args: { ...Base.args, disabled: true },
};

export const Error: Story = {
  ...Base,
  args: { ...Base.args, "aria-invalid": true },
};

export const Placeholder: Story = {
  ...Base,
  args: { ...Base.args, defaultValue: undefined },
};

export const Large: Story = {
  ...Base,
  args: { ...Base.args, className: "text-lg" },
};
