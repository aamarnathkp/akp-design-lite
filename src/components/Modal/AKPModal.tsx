import React from "react";
import {
    ModalContainer,
    ModalBox,
    ModalHeadingSection,
    ModalHeadingTitle,
    ModalFooterSection,
} from "./AKPModalStyle";
import { AKPModalProps } from "../../types/modal";
import AKPButton from "../Button/AKPButton";

type Props = {};

const AKPModal = ({
    size,
    currentTheme = "light",
    open,
    onClose,
}: AKPModalProps) => {
    return open ? (
        <ModalContainer open={open}>
            <ModalBox size={size} currentTheme={currentTheme}>
                <ModalHeadingSection>
                    <ModalHeadingTitle>Modal Heading</ModalHeadingTitle>
                    <AKPButton
                        type={currentTheme === "light" ? "dark" : "light"}
                        size='small'
                        rounded
                        gradient
                        shadow
                        onClick={() => onClose()}>
                        X
                    </AKPButton>
                </ModalHeadingSection>
                <ModalFooterSection>
                    <AKPButton type='secondary' size='medium'>
                        Cancel
                    </AKPButton>
                    <AKPButton type='light' size='medium'>
                        Save
                    </AKPButton>
                </ModalFooterSection>
            </ModalBox>
        </ModalContainer>
    ) : null;
};

export default AKPModal;
