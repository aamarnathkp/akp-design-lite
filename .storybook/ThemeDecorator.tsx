// src/storybook/ThemeDecorator.tsx
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme"; // Adjust the import path as needed

interface ThemeDecoratorProps {
    children: ReactNode;
}

const ThemeDecorator: React.FC<ThemeDecoratorProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeDecorator;
