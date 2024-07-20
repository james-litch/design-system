import { Button, Checkbox, Input, Radio } from "@scandotcom/design-system";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj;
const meta: Meta = {
  title: "Recipes/Form",
  tags: ["autodocs"],
};

export default meta;

export const Filters: Story = {
  render: () => (
    <form className="p-sm border border-neutral-300 rounded-xl space-y-md">
      <fieldset className="space-y-2xs">
        <legend className="font-display font-bold text-fl-1">Sort by</legend>

        <label>
          <Radio name="sort" value="price-asc" />
          Price (low to high)
        </label>
        <label>
          <Radio name="sort" value="price-desc" />
          Price (high to low)
        </label>
        <label>
          <Radio name="sort" value="distance-asc" />
          Distance (low to high)
        </label>
        <label>
          <Radio name="sort" value="distance-desc" />
          Distance (high to low)
        </label>
      </fieldset>

      <fieldset className="space-y-2xs">
        <legend className="font-display font-bold text-fl-1">Facilities</legend>

        <label>
          <Checkbox name="three_t" />
          3T Scanner
        </label>
        <label>
          <Checkbox name="open_scanner" />
          Open Scanner
        </label>
        <label>
          <Checkbox name="accessible" />
          Accessible
        </label>
        <label>
          <Checkbox name="children_accepted" />
          Children Accepted
        </label>
      </fieldset>
      <Button kind="pink">Update filters</Button>
    </form>
  ),
};

export const Search: Story = {
  render: () => (
    <search>
      <form action="/search">
        <label htmlFor="search" className="font-medium">Search</label>
        <Input type="search" id="search" name="search" placeholder="Search by phone or email" />
      </form>
    </search>
  ),
};
