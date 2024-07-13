import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, Disclosure } from "design-system";
import { IconUK, IconUSA } from "design-system/icons";

type Props = {
  size: string;
};

type Story = StoryObj<Props>;
const meta: Meta<Props> = {
  title: "Recipes/Disclosure",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const FAQ: Story = {
  render: () => (
    <Disclosure className="bg-cream-200 group overflow-hidden rounded-lg">
      <summary className="p-sm group-open:pb-2xs">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </summary>
      <div className="p-sm pt-0">
        <p className="text-fl--1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In fugiat
          tempora ipsa dolor expedita animi aperiam, similique quaerat accusamus
          beatae laborum exercitationem nihil minima quibusdam odit non
          laudantium numquam vero.
        </p>
      </div>
    </Disclosure>
  ),
};

export const SelectMenu: Story = {
  render: () => (
    <Disclosure className="relative">
      <summary
        id="select-menu-summary"
        className="p-sm rounded-lg border border-neutral-300"
      >
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </summary>
      <fieldset
        aria-describedby="select-menu-summary"
        className="border border-neutral-300 bg-white rounded-lg p-2xs absolute top-full mt-2xs w-full z-10"
      >
        <label className="flex gap-2xs p-2xs hover:bg-neutral-50">
          <Checkbox name="modality" value="mri" /> MRI
        </label>
        <label className="flex gap-2xs p-2xs hover:bg-neutral-50">
          <Checkbox name="modality" value="xray" /> X-Ray
        </label>
      </fieldset>
    </Disclosure>
  ),
};

export const LanguageSwitcher: Story = {
  render: () => (
    <Disclosure className="relative text-white">
      <summary className="flex gap-2xs items-center p-sm bg-green-800 border-2 border-green-500 border rounded-full">
        <IconUK height="1.5em" />
        <span>United Kingdom</span>
      </summary>
      <nav className="absolute bg-green-800 w-full top-full mt-2xs p-2xs rounded-lg">
        <ul>
          <li>
            <a
              href="#"
              className="flex gap-2xs rounded-lg p-2xs hover:bg-green-900"
            >
              <IconUK height="1.2em" />
              United Kingdom
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-2xs rounded-lg p-2xs hover:bg-green-900"
            >
              <IconUSA height="1.2em" />
              United States
            </a>
          </li>
        </ul>
      </nav>
    </Disclosure>
  ),
};
