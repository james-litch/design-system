import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "@scandotcom/design-system";

type Story = StoryObj<typeof TextArea>;
const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  args: { defaultValue: "Hello, world!" },
};

export const Disabled: Story = {
  args: { ...Base.args, disabled: true },
};

export const Error: Story = {
  args: { ...Base.args, "aria-invalid": true },
};

export const Placeholder: Story = {
  args: { ...Base.args, defaultValue: undefined, placeholder: "Hello, world!" },
};

export const Large: Story = {
  args: { ...Base.args, className: "text-lg" },
};
