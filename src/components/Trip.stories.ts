import type { Meta, StoryObj } from "@storybook/react";
import trips from "./../mocks/trips.json";

import { Trip } from "./Trip";

const meta = {
  title: "Components/Trip",
  component: Trip,
} satisfies Meta<typeof Trip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...trips[0],
  },
};
