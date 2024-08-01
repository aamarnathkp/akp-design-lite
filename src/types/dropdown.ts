import { Type, Size } from "./common";

export interface AKPDropdownProps {
    type: Type;
    size: Size;
    disabled?: boolean;
    gradient?: boolean;
    shadow?: boolean;
    label?: string;
    options: string[];
    multiSelect?: boolean;
    showSelectedCount?: boolean;
    showClearButton?: boolean;
}
