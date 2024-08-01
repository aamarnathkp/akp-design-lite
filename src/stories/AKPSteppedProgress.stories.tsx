import type { Meta, StoryObj } from "@storybook/react";
import AKPSteppedProgress from "../components/Flow/SteppedProgress/SteppedProgress";

export default {
    title: "Components/SteppedProgress",
    component: AKPSteppedProgress,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    argTypes: {
        type: {
            control: {
                type: "select",
            },
            options: [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "danger",
                "light",
                "dark",
            ],
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        current: {
            control: { type: "number" },
        },
        direction: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
        },
        showIndices: {
            control: { type: "boolean" },
        },
        noOfSteps: {
            control: { type: "number" },
        },
        disableClick: {
            control: { type: "boolean" },
        },
    },
} as Meta;

type Story = StoryObj<typeof AKPSteppedProgress>;

export const Primary: Story = {
    args: {
        type: "primary",
        size: "medium",
        current: 2,
        direction: "horizontal",
        showIndices: true,
        noOfSteps: 5,
        disableClick: true,
    },
};
