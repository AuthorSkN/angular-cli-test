import {Component, HostBinding} from "@angular/core";
import {UxThemeHelper} from "./ux-theme.helper";

@Component({
    selector: "ux-theme",
    templateUrl: "theme.component.html"
})

export class UxThemeComponent {

    @HostBinding("class") classes = "ux-theme";

    /** @internal */
    public _changeTheme(theme: string): void {
        UxThemeHelper.changeTheme(theme);
    }

    constructor() {

    }
}
