import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@scandotcom/design-system";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: { children: "Lorem ipsum" },
};

export const Pink: Story = {
  args: { ...Base.args, kind: "pink" },
};

export const Secondary: Story = {
  args: { ...Base.args, kind: "secondary" },
};

export const White: Story = {
  args: { ...Base.args, kind: "white" },
};

export const LargeButton: Story = {
  args: { ...Pink.args, className: "text-fl-1" },
};

export const SmallButton: Story = {
  args: { ...Pink.args, className: "text-fl--1" },
};
