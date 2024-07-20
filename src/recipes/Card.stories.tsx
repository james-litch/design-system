import type { Meta, StoryObj } from "@storybook/react";

type Props = {
  className: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Recipes/Card",
  tags: ["autodocs"],
};

export default meta;

export const Default: Story = {
  args: {
    className:
      "sidebar-l [--min-content-width:60%] gap-sm bg-white rounded-xl p-sm border border-neutral-300",
  },

  render: ({ className }) => (
    <article className={className}>
      <img src="https://placehold.co/200x200" alt="placeholder" className="grow rounded-xl max-h-[18rem] object-cover" />
      <div className="space-y-2xs">
        <h3 className="text-fl-1">
          <a href="#" className="card-link">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </h3>
        <p className="text-fl-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In fugiat
          tempora ipsa dolor expedita animi aperiam, similique quaerat
          accusamus.
        </p>
      </div>
    </article>
  ),
};
