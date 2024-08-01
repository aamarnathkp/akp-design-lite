import { Type, Size, Direction } from "./common";

export interface AKPSteppedProgressProps {
    type: Type;
    size: Size;
    disabled?: boolean;
    gradient?: boolean;
    shadow?: boolean;
    label?: string;
    current: number;
    direction: Direction;
    showIndices?: boolean;
    noOfSteps: number;
    disableClick?: boolean;
    onClick?: () => void;
}
