import {NgModule} from "@angular/core";
import {UxHomeComponent} from "./home.component";
import {UxSharedModule} from "../shared/shared.module";
import {UxHomeService} from "./services/home.service";

@NgModule({
    imports: [UxSharedModule],
    exports: [UxHomeComponent],
    providers: [UxHomeService],
    declarations: [UxHomeComponent],
})
export class UxHomeModule {

}