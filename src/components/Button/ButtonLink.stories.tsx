import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "design-system";

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: "components/ButtonLink",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

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
  args: { ...Pink.args, className: "text-lg" },
};
