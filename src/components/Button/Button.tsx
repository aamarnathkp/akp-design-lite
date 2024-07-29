import React from "react";
import AKPButton from "./AKPButton";

import "./style.css";

type Props = {};

const Button = (props: Props) => {
    return (
        <AKPButton
            type='danger'
            size='medium'
            gradient
            shadow
            onClick={() => {
                console.log("button clicked");
            }}>
            Button
        </AKPButton>
    );
};

export default Button;
