import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  size: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Typography/Normal",
  decorators: [
    (Story) => (
      <div className="[&>*]:line-clamp-1">
        <Story />
      </div>
    ),
  ],
  render: ({ size }) => {
    return (
      <p className={size}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        tempore voluptates rem quasi! Architecto doloribus optio quisquam
        molestias, nulla tenetur, quidem doloremque officiis recusandae nemo eos
        ut perspiciatis reprehenderit veritatis!
      </p>
    );
  },
};

export default meta;

export const Base: Story = {
  args: { size: "text-base" },
};

export const XXSmall: Story = {
  args: { size: "text-2xs" },
};

export const XSmall: Story = {
  args: { size: "text-xs" },
};

export const Small: Story = {
  args: { size: "text-sm" },
};

export const Large: Story = {
  args: { size: "text-lg" },
};
export const XLarge: Story = {
  args: { size: "text-xl" },
};
export const XXLarge: Story = {
  args: { size: "text-2xl" },
};
export const XXXLarge: Story = {
  args: { size: "text-3xl" },
};
export const XXXXLarge: Story = {
  args: { size: "text-4xl" },
};

export const All: Story = {
  render: () => (
    <>
      <div className="text-7xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-6xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-5xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-3xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-2xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-xl"> Lorem ipsum dolor sit, amet</div>
      <div className="text-lg"> Lorem ipsum dolor sit, amet</div>
      <div className="text-base"> Lorem ipsum dolor sit, amet</div>
      <div className="text-sm"> Lorem ipsum dolor sit, amet</div>
      <div className="text-xs"> Lorem ipsum dolor sit, amet</div>
    </>
  ),
};
