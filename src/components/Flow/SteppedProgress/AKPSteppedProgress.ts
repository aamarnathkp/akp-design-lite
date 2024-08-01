import styled from "styled-components";
import { Direction, Size, Type } from "../../../types/common";
import { getStepperSize } from "../../../utils/utils";

export const SteppedProgressContainer = styled.div`
    width: 100%;
    /* height: 100%; */
    padding: 5px 10px;
`;

export const SteppedProgressStep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SteppedProgressLabel = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-top: 5px;
`;

export const SteppedWrapper = styled.div<{ direction: Direction }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ direction }) =>
        direction === "vertical" ? "column" : "row"};

    /* gap: 10px; */
`;

export const SteppedPointer = styled.div.withConfig({
    shouldForwardProp: (prop) => !["active"].includes(prop),
})<{
    active: boolean;
    size: Size;
    type: Type;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 5px; */
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme, type }) => theme.colors?.[type]};
    background: ${({ theme, type }) => `${theme.colors?.[type]}`};
    border-radius: 100%;
    padding: 8px;
    min-width: ${({ size }) => getStepperSize(size)};
    min-height: ${({ size }) => getStepperSize(size)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid ${({ theme, type }) => theme.colors?.[type]};

    ${({ active }) => active && `color: white;`};
    ${({ active }) => !active && `background: white;`};
`;

export const SteppedLine = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        !["active", "showIndices", "first", "last"].includes(prop),
})<{
    active: boolean;
    type: Type;
    length: number;
    direction: Direction;
    showIndices: boolean;
    first: boolean;
    last: boolean;
}>`
    min-width: ${({ length, direction }) =>
        direction === "horizontal" ? `${length}%` : "5px"};
    height: ${({ direction }) =>
        direction === "horizontal" ? "5px" : "100px"};
    background: ${({ theme, type }) => theme.colors?.[type]};
    ${({ active }) => !active && `background: white;`};
    ${({ active, type, theme, direction }) => {
        if (!active && direction === "horizontal") {
            return `border-top: 1px solid ${theme.colors?.[type]};border-bottom: 1px solid ${theme.colors?.[type]};`;
        } else if (!active && direction === "vertical") {
            return `border-left: 1px solid ${theme.colors?.[type]};border-right: 1px solid ${theme.colors?.[type]};`;
        } else {
            return "";
        }
    }};

    ${({ showIndices, direction, theme, type, first, last }) => {
        if (!showIndices && direction === "horizontal" && first) {
            return `border-left: 1px solid ${theme.colors?.[type]}`;
        } else if (!showIndices && direction === "horizontal" && last) {
            return `border-right: 1px solid ${theme.colors?.[type]}`;
        }
    }};
    transition: all 0.3s ease-in-out;
`;
