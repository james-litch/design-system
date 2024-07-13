import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  "--min-item-size": string;
  className: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Layouts/AutoGrid",
  argTypes: {
    className: { table: { disable: true } },
    "--min-item-size": {
      table: {
        type: { summary: undefined },
        defaultValue: { summary: "1220px" },
      },
      description:
        "The point at which the layout switches from columns to rows.",
    },
  },
};

export default meta;

export const Fill: Story = {
  args: { className: "auto-fill-grid", "--min-item-size": "200px" },
  render: ({ className, ...props }) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className={className} style={style}>
        <div className="bg-pink-300 text-black p-lg">One</div>
        <div className="bg-green-800 text-white p-lg">Two</div>
        <div className="bg-pink-300 text-black p-lg">Three</div>
      </div>
    );
  },
};

export const Fit: Story = {
  ...Fill,
  args: { className: "auto-fit-grid", "--min-item-size": "200px" },
};

export const Gap: Story = {
  ...Fit,
  args: {
    className: "auto-fit-grid gap-x-xs gap-y-sm",
    "--min-item-size": "200px",
  },
};
