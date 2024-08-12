import { Button } from "@scandotcom/design-system";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj;
const meta: Meta = {
  title: "Recipes/Dropdown",
  tags: ["autodocs"],
};

export default meta;

export const DropdownMenu: Story = {
  render: () => (
    <div className="flex items-center">
      <Button
        kind="pink"
        popoverTarget="menu"
        popoverTargetAction="toggle"
        className="[anchor-name:--menu-toggle] mx-auto"
      >
        Menu
      </Button>

      <nav
        id="menu"
        popover="auto"
        className="absolute [position-anchor:--menu-toggle] [inset-area:bottom_span-left] border border-neutral-300 rounded-lg mt-sm p-2xs"
      >
        <ul className="">
          <li>
            <a href="#" className="block rounded-xl px-sm py-xs hover:bg-neutral-100">
              Menu Item 1
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-xl px-sm py-xs hover:bg-neutral-100">
              Menu Item 2
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-xl px-sm py-xs hover:bg-neutral-100">
              Menu Item 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ),
};
