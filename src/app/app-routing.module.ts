import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UxPageNotFoundComponent} from "./modules/shared/components/page-not-found/ux-page-not-found.component";
import {UxHomeComponent} from "./modules/home/home.component";


const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: UxHomeComponent, data: { state: "home" }},
    {path: "lazy", loadChildren: "./modules/lazy/lazy.module#UxLazyModule", data: { state: "lazy" }},
    {path: "**", component: UxPageNotFoundComponent},
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
