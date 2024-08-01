import type { Meta, StoryObj } from "@storybook/react";
import AKPModal from "../components/Modal/AKPModal";

export default {
    title: "Components/Modal",
    component: AKPModal,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        shadow: {
            control: { type: "boolean" },
        },
        currentTheme: {
            control: { type: "select" },
            options: ["light", "dark"],
        },
        open: {
            control: { type: "boolean" },
        },
    },
} as Meta;

type Story = StoryObj<typeof AKPModal>;

export const Primary: Story = {
    args: {
        size: "medium",
        currentTheme: "light",
        open: true,
        shadow: true,
    },
};
