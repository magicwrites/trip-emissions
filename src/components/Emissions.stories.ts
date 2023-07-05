import type { Meta, StoryObj } from "@storybook/react";

import { Emissions } from "./Emissions";

const meta = {
  title: "Components/Emissions",
  component: Emissions,
  argTypes: {
    emissions: { control: "number" },
  },
} satisfies Meta<typeof Emissions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    emissions: 200,
  },
};
