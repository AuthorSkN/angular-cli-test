import {Component, OnInit} from "@angular/core";
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {UxHeaderLink} from "@netcracker/ux-ng2/dist/ux-components/src/components/header/header.component";

export const routerTransition: any = trigger("routerTransition", [
    transition("* <=> *", [
        query(":enter, :leave", style({position: "fixed", width: "100%"})
            , {optional: true}),
        query(":enter", style({transform: "translateX(200px)", opacity: 0})
            , {optional: true}),
        group([
            query(":leave", [
                style({transform: "translateX(0%)"}),
                animate("0.2s cubic-bezier(0.4, 0.0, 1, 1)", style({transform: "translateX(-300px)", opacity: 0}))
            ], {optional: true}),
            query(":enter", [
                style({transform: "translateX(200px)"}),
                animate("0.4s cubic-bezier(0.0, 0.0, 0.2, 1)", style({transform: "translateX(0%)", opacity: 1}))
            ], {optional: true}),
        ])
    ])
]);

@Component({
    selector: "app-component",
    templateUrl: "./app.component.html",
    animations: [ routerTransition ]
})
export class AppComponent implements OnInit {

    /** @internal */
    public _links: UxHeaderLink[] = [
        { title: "Home", url: "/home" },
        { title: "Lazy", url: "/lazy" }
    ];

    constructor() {}

    ngOnInit() {
    }

    public getState(outlet: any) {
        return outlet.activatedRouteData && outlet.activatedRouteData.state;
    }

}
