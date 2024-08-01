import { DefaultTheme } from "styled-components";
import { Type, ColorType, Size, Theme } from "../types/common";
import { theme } from "../styles/theme";

export const getColorForType = (
    type: Type,
    theme: DefaultTheme,
    colorType?: ColorType
) => {
    return colorType
        ? theme?.colors?.[`${type}${colorType}`]
        : theme?.colors?.[type];
};

export const getLinearGradientColor = (
    type: Type,
    theme: DefaultTheme,
    colorType?: ColorType
) => {
    const topColor = colorType
        ? theme?.colors?.[`${type}${colorType}`]
        : theme?.colors?.[type];
    const bottomColor = theme?.colors?.[`${type}Active`];
    return `linear-gradient(180deg, ${topColor}, ${bottomColor})`;
};

export const getBorderForType = (
    type: Type,
    theme: DefaultTheme,
    colorType?: ColorType
) =>
    type === "light"
        ? `solid 1px ${theme.colors?.[`${type}${colorType}`]}`
        : "none";

export const getModalSize = (size: Size) => {
    if (size === "large") return `width: 80%; min-height: 50%`;
    if (size === "medium") return `width: 60%; min-height: 50%`;
    return `width: 50%; min-height: 50%`;
};

export const getThemeBG = (theme: DefaultTheme, currentTheme?: Theme) => {
    // return theme.colors?.[currentTheme || "tertiary"];
    if (currentTheme === "dark") return theme.colors.dark;
    return theme.colors.tertiary;
};

export const getStepperSize = (size: Size) => {
    switch (size) {
        case "small":
            return "30px";
        case "medium":
            return "40px";
        case "large":
            return "50px";
        default:
            return "40px";
    }
};
