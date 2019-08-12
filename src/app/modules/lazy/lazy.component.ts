import {Component, HostBinding} from "@angular/core";

@Component({
    selector: "ux-lazy",
    templateUrl: "./lazy.component.html"
})
export class UxLazyComponent {

    @HostBinding("class") classes = "ux-lazy";

    public lazyText: string = "Lazy module content";

    constructor() {}
}

