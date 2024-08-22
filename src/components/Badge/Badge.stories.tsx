import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@scandotcom/design-system";

const meta: Meta = {
  component: Badge,
  title: "components/Badge",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: { children: "Badge" },
};

export const Success: Story = {
  args: { ...Base.args, kind: "success" },
};

export const Warning: Story = {
  args: { ...Base.args, kind: "warning" },
};

export const Danger: Story = {
  args: { ...Base.args, kind: "danger" },
};
