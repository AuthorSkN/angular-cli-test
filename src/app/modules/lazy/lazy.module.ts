import {NgModule} from "@angular/core";
import {UxSharedModule} from "../shared/shared.module";
import {UxLazyComponent} from "./lazy.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: UxLazyComponent},
];

@NgModule({
    imports: [
        UxSharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [UxLazyComponent],
    declarations: [UxLazyComponent]
})
export class UxLazyModule {}


