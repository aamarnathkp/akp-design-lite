import type { Meta, StoryObj } from "@storybook/react";
import AKPButton from "../components/Button/AKPButton";

export default {
    title: "Components/Button",
    component: AKPButton,
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
        shadow: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        gradient: {
            control: { type: "boolean" },
            defaultValue: true,
        },
        onClick: { action: "clicked" },
    },
} as Meta;

type Story = StoryObj<typeof AKPButton>;

export const Primary: Story = {
    args: {
        type: "primary",
        size: "medium",
        shadow: true,
        gradient: true,
        disabled: false,
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        type: "secondary",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};

export const Tertiary: Story = {
    args: {
        type: "tertiary",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};

export const Success: Story = {
    args: {
        type: "success",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};

export const Danger: Story = {
    args: {
        type: "danger",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};

export const Light: Story = {
    args: {
        type: "light",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};

export const Dark: Story = {
    args: {
        type: "dark",
        size: "medium",
        shadow: true,
        gradient: true,
        children: "Button",
    },
};
