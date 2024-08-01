import type { Meta, StoryObj } from "@storybook/react";
import AKPDropdown from "../components/Inputs/Dropdown/Dropdown";

export default {
    title: "Components/Dropdown",
    component: AKPDropdown,
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
        multiSelect: {
            control: { type: "boolean" },
        },
        showSelectedCount: {
            control: { type: "boolean" },
        },
        showClearButton: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        gradient: {
            control: { type: "boolean" },
            defaultValue: true,
        },
        options: {
            control: { type: "select" },
        },
        onClick: { action: "clicked" },
    },
} as Meta;

type Story = StoryObj<typeof AKPDropdown>;

export const Primary: Story = {
    args: {
        type: "primary",
        size: "medium",
        shadow: true,
        gradient: true,
        disabled: false,
        multiSelect: true,
        showClearButton: true,
        showSelectedCount: true,
        options: ["option one", "option two", "option three", "option four"],
    },
};
