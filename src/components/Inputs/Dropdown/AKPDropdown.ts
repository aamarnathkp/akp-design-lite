import styled from "styled-components";
import { AKPDropdownProps } from "../../../types/dropdown";
import {
    getColorForType,
    //   getBorderForType,
    getLinearGradientColor,
} from "../../../utils/utils";
import { Type } from "../../../types/common";

type DropdownOptionsProps = {
    isOpen: boolean;
};

interface DropdownPropsWithWidth extends AKPDropdownProps {
    minWidth: number;
}

export const DropDownContainer = styled.div`
    position: relative;
    width: 200px;
`;

export const DropdownSelect = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        !["gradient", "shadow", "multiSelect", "minWidth"].includes(prop),
})<DropdownPropsWithWidth>`
    display: flex;
    justify-content: start;
    align-items: center;

    /* min-width: ${({ minWidth }) => (minWidth > 150 ? minWidth : 150)}px; */
    /* width: auto; */

    border-radius: 4px;
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;

    transition: all 0.3s ease-in-out;

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
    ${({ size }) =>
        size === "small" &&
        `
   height: 32px;
   padding: 0 12px;
   font-size: 14px;
 `}

    ${({ size }) =>
        size === "medium" &&
        `
   height: 40px;
   padding: 0 16px;
   font-size: 16px;
 `}

 ${({ size }) =>
        size === "large" &&
        `
   height: 48px;
   padding: 0 20px;
   font-size: 18px;
 `}
`;

export const DropdownLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const DropdownOptions = styled.div.withConfig({
    shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})<DropdownOptionsProps>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;

    /* background: ${({ theme }) => theme.colors.lite}; */
    background: #d1d1d0;
    border-radius: 4px;
    padding: 10px 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 2px;

    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    cursor: pointer;
    margin-top: 5px;
    min-width: 100%;
    width: fit-content;
`;

export const DropdownOption = styled.div.withConfig({
    shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ type: Type; active?: boolean }>`
    padding: 4px;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    border: 1px solid ${({ theme, type }) => theme.colors?.[type]};
    transition: all 0.3s ease-out;

    ${({ active, theme, type }) =>
        active && `background: ${getColorForType(type, theme)}`};
    color: ${({ theme, type, active }) =>
        getColorForType(type, theme, active ? "Text" : "Hover")};

    &:hover {
        /* background: ${({ theme, type }) => getColorForType(type, theme)}; */
        color: ${({ theme, type }) => getColorForType(type, theme, "Text")};
        border: 1px solid
            ${({ theme, type }) => getColorForType(type, theme, "Text")};
    }
`;

export const DropdownOptionValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
`;

export const DropdownSelectionSummary = styled.div<{
    type: Type;
    isOpen: boolean;
    count?: boolean;
}>`
    position: absolute;
    top: -40px;
    ${({ count }) => !count && `right: 0px;`};
    ${({ count }) => count && `left: 0px;`};
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
    padding: 4px 0px;
    z-index: 10px;
    color: ${({ theme, type }) => getColorForType(type, theme)};
    background: #d1d1d0;
    border-radius: 100%;
    padding: 8px;
    width: 30px;
    height: 30px;
    font-size: 14px;
    cursor: ${({ count }) => (count ? "default" : "pointer")};

    span {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`;

//${({ isOpen, count }) => (isOpen || count ? "flex" : "none")};
// right: ${({ count }) => (count ? "0" : "-40")}px;
