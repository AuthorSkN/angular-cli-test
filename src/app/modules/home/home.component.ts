import {Component, HostBinding, OnInit} from "@angular/core";
import {UxHomeService} from "./services/home.service";
import {UxHomeData} from "./model/home.model";
import {Observable} from "rxjs";

@Component({
    selector: "ux-home",
    templateUrl: "./home.component.html"
})
export class UxHomeComponent implements OnInit {

    @HostBinding("class") classes = "ux-home";

    public greetingsText: string = "Home module content";
    public serverText: string = "Text from server:";

    /** @internal */
    public _homeData$: Observable<UxHomeData>;

    constructor(private homeService: UxHomeService) {
    }

    public ngOnInit(): void {
        this._homeData$ = this.homeService.getData();
    }
}
