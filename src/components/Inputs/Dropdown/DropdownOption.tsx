import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

import {
    DropdownOption as DropdownOptionContainer,
    DropdownOptionValue,
} from "./AKPDropdown";
import { Type } from "../../../types/common";

interface DropdownOptionProps {
    type: Type;
    active: boolean;
    value: string | string[];
    onClick: (e: any) => void;
}

const DropdownOption = ({
    type,
    active,
    onClick,
    value,
}: DropdownOptionProps) => {
    return (
        <DropdownOptionContainer type={type} active={active} onClick={onClick}>
            <DropdownOptionValue>
                <AiFillCheckCircle />
                {value}
            </DropdownOptionValue>
        </DropdownOptionContainer>
    );
};

export default DropdownOption;
