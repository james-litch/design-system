import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@scandotcom/design-system";

type Story = StoryObj<typeof Switch>;
const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Large: Story = {
  args: { className: "text-lg" },
};
