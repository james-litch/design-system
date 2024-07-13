import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  "--min-content-width": string;
  className?: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Layouts/Sidebar",
  argTypes: {
    className: { table: { disable: true } },
    "--min-content-width": {
      table: {
        type: { summary: undefined },
        defaultValue: { summary: "50%" },
      },
      description: "The min width of the main content area.",
    },
  },
};

export default meta;

export const Left: Story = {
  args: { className: "sidebar-l", "--min-content-width": "60%" },
  render: ({ className, ...styles }) => {
    const style = { ...styles } as React.CSSProperties;

    return (
      <div className={className} style={style}>
        <div className="bg-pink-300 text-black p-lg min-w-[200px]">Left</div>
        <div className="bg-green-800 text-white p-lg">Right</div>
      </div>
    );
  },
};

export const Right: Story = {
  args: { className: "sidebar-r", "--min-content-width": "60%" },
  render: ({ className, ...styles }) => {
    const style = { ...styles } as React.CSSProperties;

    return (
      <div className={className} style={style}>
        <div className="bg-pink-300 text-black p-lg">Left</div>
        <div className="bg-green-800 text-white p-lg min-w-[200px]">Right</div>
      </div>
    );
  },
};

export const ReverseWrap: Story = {
  ...Right,
  args: {
    className: "sidebar-r flex-wrap-reverse",
    "--min-content-width": "60%",
  },
};

export const Gap: Story = {
  ...Right,
  args: { className: "sidebar-r gap-sm", "--min-content-width": "56%" },
};
