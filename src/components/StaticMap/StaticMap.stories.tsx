import type { Meta, StoryObj } from "@storybook/react";
import { StaticMap } from "@scandotcom/design-system";

type Story = StoryObj<typeof StaticMap>;
const meta: Meta<typeof StaticMap> = {
  component: StaticMap,
  tags: ["autodocs"],
};

export default meta;

export const Base: Story = {
  args: { latitude: 53.430759, longitude: -2.961425, height: 300, width: 500 },
};

export const WidthStyles: Story = {
  args: {
    ...Base.args,
    className: "rounded-xl border border-neutral-300",
  },
};

export const WithMarker: Story = {
  args: {
    ...WidthStyles.args,
    marker: {
      latitude: 53.430759,
      longitude: -2.961425,
    },
  },
};
