import React from "react";
import AKPButton from "../../components/Button/AKPButton";
import {
    DemoContainer,
    DemoPropSection,
    DemoComponentSection,
} from "./AKPDemo";

type Props = {};

const DemoComponent = (props: Props) => {
    return (
        <DemoContainer>
            <DemoPropSection>
                <button>Shadow</button>
                <button>Gradient</button>
            </DemoPropSection>
            <DemoComponentSection>
                <AKPButton type='primary' size='medium'>
                    Sample Button
                </AKPButton>
            </DemoComponentSection>
        </DemoContainer>
    );
};

export default DemoComponent;
