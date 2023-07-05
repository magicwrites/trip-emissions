import type { Meta, StoryObj } from "@storybook/react";

import { TripSkeleton } from "./TripSkeleton";

const meta = {
  title: "Components/TripSkeleton",
  component: TripSkeleton,
} satisfies Meta<typeof TripSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
