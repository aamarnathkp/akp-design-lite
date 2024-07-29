import styled from "styled-components";

export const DemoContainer = styled.div`
    width: 100%;
    height: 90vh;
    /* margin: 40px; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
`;

export const DemoPropSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    border: solid 1px;
`;

export const DemoComponentSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid;
`;
