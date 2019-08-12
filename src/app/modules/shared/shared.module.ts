import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {UxPageNotFoundComponent} from "./components/page-not-found/ux-page-not-found.component";

@NgModule({
    imports: [CommonModule, TranslateModule],
    exports: [CommonModule, TranslateModule, UxPageNotFoundComponent],
    declarations: [UxPageNotFoundComponent],
})
export class UxSharedModule {
}
