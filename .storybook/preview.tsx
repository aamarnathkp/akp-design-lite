import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme"; // Adjust the import path as needed

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: "#ffffff" },
                { name: "dark", value: "#000000" },
            ],
        },
        options: {
            storySort: {
                order: ["Introduction", "Components"],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
