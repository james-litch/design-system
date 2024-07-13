import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  "--threshold": string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Layouts/Switcher",
  argTypes: {
    "--threshold": {
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

export const Base: Story = {
  args: { "--threshold": "900px" },
  render: (props) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className="switcher" style={style}>
        <div className="bg-pink-300 p-lg text-black">Foo</div>
        <div className="bg-green-800 p-lg text-white">Bar</div>
      </div>
    );
  },
};

export const Grow: Story = {
  ...Base,
  render: (props) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className="switcher" style={style}>
        <div className="bg-pink-300 p-lg text-black grow-4">Foo</div>
        <div className="bg-green-800 p-lg text-white">Bar</div>
      </div>
    );
  },
};

export const ReverseWrap: Story = {
  ...Base,
  render: (props) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className="switcher flex-wrap-reverse" style={style}>
        <div className="bg-pink-300 p-lg text-black">Foo</div>
        <div className="bg-green-800 p-lg text-white">Bar</div>
      </div>
    );
  },
};

export const Gap: Story = {
  ...Base,
  render: (props) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className="switcher gap-sm" style={style}>
        <div className="bg-pink-300 p-lg text-black">Foo</div>
        <div className="bg-green-800 p-lg text-white">Bar</div>
      </div>
    );
  },
};

export const Multiple: Story = {
  ...Base,
  render: (props) => {
    const style = { ...props } as React.CSSProperties;

    return (
      <div className="switcher" style={style}>
        <div className="bg-pink-300 p-lg text-black">Foo</div>
        <div className="bg-green-800 p-lg text-white">Bar</div>
        <div className="bg-neutral-200 p-lg text-black">Baz</div>
      </div>
    );
  },
};
