import { Type, Size } from "./common";

export interface AKPButtonProps {
    type: Type;
    size: Size;
    disabled?: boolean;
    gradient?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    onClick?: () => void;
    children: React.ReactNode | string;
}
