import { Gadjet } from "../ui";
import { ButtonPinStyle, ButtonPinStyleParam } from "./button-pin.style";

export class ButtonPin extends Gadjet {
    static Style = ButtonPinStyle;

    static tagStyle(style?: string | ButtonPinStyleParam): void {
        super.tagStyle(style);
    }

    static classStyle(class_: string, style?: string | ButtonPinStyleParam): void {
        super.classStyle(class_, style);
    }

    addStyle(style?: string | ButtonPinStyleParam): void {
        super.addStyle(style);
    }
}