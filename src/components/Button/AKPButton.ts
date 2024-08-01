import styled from "styled-components";
import { AKPButtonProps } from "../../types/button";
import {
    getColorForType,
    getBorderForType,
    getLinearGradientColor,
} from "../../utils/utils";
import { Type } from "../../types/common";
import { theme } from "../../styles/theme";

// interface ButtonProps {
//     primary?: boolean;
//     size?: "small" | "medium" | "large";
//     disabled?: boolean;
// }

const AKPButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !["gradient", "shadow"].includes(prop),
})<AKPButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* border: none; */
    border: ${({ type }) => getBorderForType(type, theme, "Text")};
    border-radius: 4px;
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    transition:
        background-color 0.3s,
        box-shadow 0.3s;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;

    ${({ shadow }) => shadow && `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)`};

    background: ${({ theme, type }) => getColorForType(type, theme)};
    color: ${({ theme, type }) => getColorForType(type, theme, "Text")};

    /* Size variants */
    ${({ type, gradient, theme, disabled }) =>
        gradient &&
        !disabled &&
        `
        background-image: ${getLinearGradientColor(type, theme)};
        color: ${getColorForType(type, theme, "Text")};
  `}

    &:hover {
        background-color: ${({ theme, type }) =>
            getColorForType(type, theme, "Hover")};
        background: ${({ theme, type }) =>
            getColorForType(type, theme, "Hover")};
        ${({ shadow }) => shadow && `box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2)`};
    }

    &:active {
        background-color: ${({ theme, type }) =>
            getColorForType(type, theme, "Active")};
        ${({ shadow }) => shadow && `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3)`};
    }

    &:disabled {
        background-color: ${({ theme, type }) =>
            getColorForType(type, theme, "Disabled")};
        cursor: not-allowed;
        box-shadow: none;
    }

    /* Size variants */
    ${({ size, rounded }) =>
        size === "small" &&
        `
    ${rounded ? `width: 32px; border-radius: 32px;` : ""}    
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
  `}

    ${({ size, rounded }) =>
        size === "medium" &&
        `
    ${rounded ? `width: 40px; border-radius: 40px;` : ""}    
    height: 40px;
    padding: 0 16px;
    font-size: 16px;
  `}

  ${({ size, rounded }) =>
        size === "large" &&
        `
    ${rounded ? `width: 48px; border-radius: 48px;` : ""}    
    height: 48px;
    padding: 0 20px;
    font-size: 18px;
  `}
`;

export default AKPButton;
