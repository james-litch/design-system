import { classnames } from "@scandotcom/design-system";
import { IconAlertCircle } from "@scandotcom/design-system/icons";
import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  colors: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Recipes/Alert",
  tags: ["autodocs"],
};

export default meta;

export const Default: Story = {
  args: {
    colors: "text-neutral-900 bg-neutral-50",
  },

  render: ({ colors }) => {
    const classes = classnames(
      "flex items-center gap-2xs border p-sm rounded-xl font-medium",
      colors
    );

    return (
      <div role="alert" className={classes}>
        <IconAlertCircle width={24} aria-hidden />
        <p>I'm an alert!</p>
      </div>
    );
  },
};

export const Error: Story = {
  ...Default,
  args: { colors: "text-danger-600 bg-danger-50" },
};

export const Warning: Story = {
  ...Default,
  args: { colors: "text-warning-900 bg-warning-50" },
};
