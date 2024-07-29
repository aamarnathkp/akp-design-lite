import { DefaultTheme } from "styled-components";
import { Type, ColorType } from "../types/common";

export const getColorForType = (
    type: Type,
    theme: DefaultTheme,
    colorType?: ColorType
) => {
    // if (active) return theme?.colors?.[`${type}Active`];
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
    // return "linear-gradient(45deg, #ff6f61, #d83a56)";
};

export const getBorderForType = (
    type: Type,
    theme: DefaultTheme,
    colorType?: ColorType
) =>
    type === "light"
        ? `solid 1px ${theme.colors?.[`${type}${colorType}`]}`
        : "none";
