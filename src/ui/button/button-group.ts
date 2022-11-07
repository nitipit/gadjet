import { ButtonGroupStyle, ButtonGroupStyleParam } from "./button-group.style";
import { Gadjet } from "../ui";

export class ButtonGroup extends Gadjet {
    static Style = ButtonGroupStyle;

    static tagStyle(style?: string | ButtonGroupStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | ButtonGroupStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ButtonGroupStyleParam): void {
        super.addStyle(style);
    }
}