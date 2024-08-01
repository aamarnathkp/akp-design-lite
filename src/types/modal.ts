import { Theme, Size } from "./common";

export interface AKPModalProps {
    open: boolean;
    onClose: () => void;
    size: Size;
    shadow?: boolean;
    currentTheme?: Theme;
}
