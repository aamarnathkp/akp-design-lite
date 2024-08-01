import React from "react";
import { BsCheckLg } from "react-icons/bs";

import { SteppedPointer, SteppedLine } from "./AKPSteppedProgress";
import { Direction, Size, Type } from "../../../types/common";

type SteppedPointerProgressProps = {
    type: Type;
    size: Size;
    noOfSteps: number;
    value: number;
    current: number;
    direction: Direction;
    showIndices: boolean;
    onClick: () => void;
};

const SteppedPointerProgress = ({
    type,
    size,
    noOfSteps,
    value,
    current,
    direction,
    showIndices,
    onClick,
}: SteppedPointerProgressProps) => {
    const calLength = 100 / noOfSteps - 5;

    const isProgressCircleActive = value <= current;
    const isProgressLineActive = value < current;
    const isLast = value === noOfSteps;

    return (
        <>
            {showIndices && (
                <SteppedPointer
                    type={type}
                    size={size}
                    active={isProgressCircleActive}
                    onClick={() => onClick()}>
                    {value <= current ? <BsCheckLg /> : value}
                </SteppedPointer>
            )}
            {!isLast && (
                <SteppedLine
                    type={type}
                    active={isProgressLineActive}
                    length={calLength}
                    direction={direction}
                    showIndices={showIndices}
                    first={value === 1}
                    last={value === noOfSteps - 1}
                />
            )}
        </>
    );
};

export default SteppedPointerProgress;
