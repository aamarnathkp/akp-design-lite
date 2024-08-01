import React, { useState, useRef, useEffect } from "react";
import {
    AiOutlineCaretDown,
    AiOutlineCaretUp,
    //   AiFillCheckCircle,
    AiFillCloseCircle,
} from "react-icons/ai";

import {
    DropDownContainer,
    DropdownSelect,
    DropdownLabel,
    DropdownOptions,
    DropdownSelectionSummary,
} from "./AKPDropdown";
import { AKPDropdownProps } from "../../../types/dropdown";
import DropdownOption from "./DropdownOption";
import { theme } from "../../../styles/theme";

const DropDown = (props: AKPDropdownProps) => {
    const {
        label,
        type,
        options,
        multiSelect = false,
        showClearButton,
        showSelectedCount,
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([] as string[]);

    const labelRef = useRef<HTMLDivElement>(null);
    const [labelWidth, setLabelWidth] = useState(0);

    useEffect(() => {
        if (labelRef.current) {
            setLabelWidth(labelRef.current.offsetWidth);
        }
    }, []);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const onChooseOption = (e: any, option: string) => {
        e.stopPropagation();
        setSelected((prev) => {
            if (multiSelect) {
                if (prev.includes(option)) {
                    return prev.filter((item) => item !== option);
                } else {
                    return [...prev, option];
                }
            } else {
                return prev.includes(option) ? [] : [option];
                // return [option];
            }
        });
        !multiSelect && setIsOpen(false);
    };

    const onClearSelection = () => {
        setSelected([]);
        setIsOpen(false);
    };

    console.log("is open", labelWidth, multiSelect, selected);

    return (
        <DropDownContainer>
            {showSelectedCount && (
                <DropdownSelectionSummary
                    type={type}
                    isOpen={isOpen}
                    count={true}>
                    <span>{selected.length}</span>
                </DropdownSelectionSummary>
            )}
            {selected.length > 0 && showClearButton && isOpen && (
                <DropdownSelectionSummary
                    type={type}
                    isOpen={isOpen}
                    count={false}
                    onClick={() => onClearSelection()}>
                    <span>
                        <AiFillCloseCircle color={theme.colors.danger} />
                    </span>
                </DropdownSelectionSummary>
            )}
            <DropdownSelect
                {...props}
                onClick={toggleDropdown}
                minWidth={labelWidth}>
                <DropdownLabel>
                    <p ref={labelRef}>
                        {selected.length > 0
                            ? selected.toString()
                            : label || "Select"}
                    </p>
                    {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                </DropdownLabel>
                <DropdownOptions isOpen={isOpen}>
                    {options.map((option, index) => (
                        <DropdownOption
                            key={`${option}-${index}`}
                            type={type}
                            active={selected.includes(option)}
                            onClick={(e: any) => onChooseOption(e, option)}
                            value={option}
                        />
                    ))}
                </DropdownOptions>
            </DropdownSelect>
        </DropDownContainer>
    );
};

export default DropDown;
