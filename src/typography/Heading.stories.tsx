import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  size: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Typography/Heading",
  decorators: [
    (Story) => (
      <div className="line-clamp-1">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const H1ToH3: Story = {
  args: { size: "text-fl-0" },
  render: ({ size }) => {
    return (
      <h1 className={size}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        tempore voluptates rem quasi! Architecto doloribus optio quisquam
        molestias, nulla tenetur, quidem doloremque officiis recusandae nemo eos
        ut perspiciatis reprehenderit veritatis!
      </h1>
    );
  },
};

export const H4ToH6: Story = {
  args: { size: "text-fl-0" },

  render: ({ size }) => {
    return (
      <h4 className={size}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        tempore voluptates rem quasi! Architecto doloribus optio quisquam
        molestias, nulla tenetur, quidem doloremque officiis recusandae nemo eos
        ut perspiciatis reprehenderit veritatis!
      </h4>
    );
  },
};
