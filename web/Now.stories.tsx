import type { Meta, StoryObj } from "@storybook/react";
import { Now } from "./index";

const meta = { title: "Widgets/Now", component: Now } satisfies Meta<typeof Now>;
export default meta;

export const Default: StoryObj<typeof Now> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Now> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
