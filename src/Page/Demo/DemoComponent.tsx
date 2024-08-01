import React, { useState } from "react";
// import AKPButton from "../../components/Button/AKPButton";
import AKPModal from "../../components/Modal/AKPModal";
import {
    DemoContainer,
    // DemoPropSection,
    // DemoComponentSection,
} from "./AKPDemo";
import AKPButton from "../../components/Button/AKPButton";

type Props = {};

const DemoComponent = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCloseHandler = () => setIsModalOpen(false);

    return (
        <DemoContainer>
            <AKPButton
                type='primary'
                size='large'
                onClick={() => {
                    setIsModalOpen(true);
                }}>
                Open Modal
            </AKPButton>
            <AKPModal
                size='medium'
                currentTheme='dark'
                open={isModalOpen}
                onClose={onCloseHandler}
            />
        </DemoContainer>
    );
};

export default DemoComponent;
