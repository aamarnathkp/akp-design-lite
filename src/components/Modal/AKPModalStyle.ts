import styled from "styled-components";
import { AKPModalProps } from "../../types/modal";
import { getModalSize, getThemeBG, getColorForType } from "../../utils/utils";
import { Size, Theme } from "../../types/common";

type ModalConatinerProp = {
    open: boolean;
};

type ModalBoxProp = {
    size: Size;
    currentTheme: Theme;
};

export const ModalContainer = styled.div<ModalConatinerProp>`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: ${({ open }) => (open ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: #ffffff80;
    transition: background-color 0.5s ease-in;
`;

export const ModalBox = styled.div<ModalBoxProp>`
    position: absolute;
    ${({ size }) => getModalSize(size)};
    background-color: ${({ theme, currentTheme }) =>
        getThemeBG(theme, currentTheme)};
    border-radius: 8px;
    padding: ${({ theme, size }) => theme.padding?.[`xy_${size}`]};
    font-size: ${({ theme, size }) => theme.fontSize?.[size]};
    color: ${({ theme, currentTheme }) =>
        theme.colors?.[`${currentTheme}Text`]};

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    transition: all 0.5s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const ModalHeadingSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

export const ModalHeadingTitle = styled.h3`
    padding-left: 10px;
`;

export const ModalFooterSection = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    height: 50px;
`;
