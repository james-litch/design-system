import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  "--content-max-width": string;
  "--content-gutter": string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Layouts/ContentGrid",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    "--content-max-width": {
      table: {
        type: { summary: undefined },
        defaultValue: { summary: "1220px" },
      },
      description: "The maximum width of the content area.",
    },
    "--content-gutter": {
      table: {
        type: { summary: undefined },
        defaultValue: { summary: "clamp(1.5rem,7vw,3rem)" },
      },
      description:
        "The padding between the content and the edge of the screen.",
    },
  },
};

export default meta;

function ExampleLayout({
  childStyles = "",
  ...styles
}: Props & { childStyles?: string }) {
  const style = { ...styles } as React.CSSProperties;
  return (
    <div className="content-grid" style={style}>
      <section className={childStyles}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          maiores eum sint! Distinctio, quas similique iure quis inventore
          aliquam, autem dignissimos eum, amet architecto aperiam ea corrupti
          harum excepturi temporibus! Quis doloremque labore voluptas.
        </p>
      </section>

      <section className="py-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          maiores eum sint! Distinctio, quas similique iure quis inventore
          aliquam, autem dignissimos eum, amet architecto aperiam ea corrupti
          harum excepturi temporibus! Quis doloremque labore voluptas.
        </p>
      </section>
    </div>
  );
}

export const Base: Story = {
  args: {
    "--content-max-width": "600px",
    "--content-gutter": "clamp(1.5rem,7vw,3rem)",
  },
  render: (styles) => (
    <ExampleLayout {...styles} childStyles="bg-pink-300 text-green-800 py-lg" />
  ),
};

export const Breakout: Story = {
  args: { ...Base.args },
  render: (styles) => (
    <ExampleLayout
      {...styles}
      childStyles="breakout bg-pink-300 text-green-800 py-lg"
    />
  ),
};
export const BreakoutLeft: Story = {
  args: { ...Base.args },
  render: (styles) => (
    <ExampleLayout
      {...styles}
      childStyles="breakout-l bg-pink-300 text-green-800 py-lg"
    />
  ),
};
export const BreakoutRight: Story = {
  args: { ...Base.args },
  render: (styles) => (
    <ExampleLayout
      {...styles}
      childStyles="breakout-r bg-pink-300 text-green-800 py-lg"
    />
  ),
};
