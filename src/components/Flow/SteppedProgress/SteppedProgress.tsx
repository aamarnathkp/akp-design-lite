import React, { useState } from "react";
import { SteppedProgressContainer, SteppedWrapper } from "./AKPSteppedProgress";
import SteppedPointerProgress from "./SteppedPointerProgress";
import { AKPSteppedProgressProps } from "../../../types/steppedProgress";

const SteppedProgress = ({
    type,
    direction,
    size,
    noOfSteps,
    current,
    showIndices,
    disableClick = false,
    onClick,
}: AKPSteppedProgressProps) => {
    const [currentStep, setCurrentStep] = useState(current);

    const onClickHandler = (index: number) => {
        if (!disableClick) {
            setCurrentStep((prev) => {
                if (prev < noOfSteps && index > currentStep) {
                    return index;
                } else if (prev > 1 && index < currentStep) {
                    return index;
                }
                return prev;
            });
            onClick && onClick();
        }
    };

    //   const onResetHandler = () => setCurrentStep(1);

    return (
        <SteppedProgressContainer>
            {/* <p>
       {current} of {noOfSteps}
     </p> */}
            <SteppedWrapper direction={direction}>
                {new Array(noOfSteps).fill(0).map((_, index) => (
                    <SteppedPointerProgress
                        key={`stepped-progress-${index}`}
                        type={type}
                        size={size}
                        noOfSteps={noOfSteps}
                        current={disableClick ? current : currentStep}
                        value={index + 1}
                        direction={direction}
                        showIndices={showIndices || false}
                        onClick={() => onClickHandler(index + 1)}
                    />
                ))}
            </SteppedWrapper>
        </SteppedProgressContainer>
    );
};

export default SteppedProgress;
