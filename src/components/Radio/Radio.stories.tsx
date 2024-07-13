import type { Meta, StoryObj } from "@storybook/react";
import { Radio, classnames } from "design-system";

type Story = StoryObj<typeof Radio>;
const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  render: ({ className, disabled, name = "base", ...args }) => {
    const classes = classnames("flex gap-2xs", className);
    return (
      <fieldset className={classes} disabled={disabled}>
        <Radio name={name} defaultChecked {...args} />
        <Radio name={name} {...args} />
      </fieldset>
    );
  },
};

export const Disabled: Story = {
  ...Base,
  args: { disabled: true, name: "disabled" },
};
export const Large: Story = {
  ...Base,
  args: { className: "text-lg", name: "large" },
};
