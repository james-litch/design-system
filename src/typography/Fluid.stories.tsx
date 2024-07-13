import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  size: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Typography/Fluid",
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

export const Step0: Story = {
  args: { size: "text-fl-0" },
};

export const StepMinus2: Story = {
  args: { size: "text-fl--2" },
};

export const StepMinus1: Story = {
  args: { size: "text-fl--1" },
};

export const Step1: Story = {
  args: { size: "text-fl-1" },
};
export const Step2: Story = {
  args: { size: "text-fl-2" },
};
export const Step3: Story = {
  args: { size: "text-fl-3" },
};
export const Step4: Story = {
  args: { size: "text-fl-4" },
};
export const Step5: Story = {
  args: { size: "text-fl-5" },
};

export const All: Story = {
  render: () => (
    <>
      <div className="text-fl-5">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl-4">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl-3">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl-2">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl-1">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl-0">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl--1">Lorem ipsum, dolor sit amet</div>
      <div className="text-fl--2">Lorem ipsum, dolor sit amet</div>
    </>
  ),
};
