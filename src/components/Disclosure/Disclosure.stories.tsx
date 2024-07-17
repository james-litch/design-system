import type { Meta, StoryObj } from "@storybook/react";
import { Disclosure } from "@scandotcom/design-system";

type Story = StoryObj<typeof Disclosure>;
const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  render: () => (
    <Disclosure>
      <summary>Disclosure</summary>
      <p>Content</p>
    </Disclosure>
  ),
};
