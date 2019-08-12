import {BrowserModule, EVENT_MANAGER_PLUGINS, HammerGestureConfig} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {UxSharedModule} from "./modules/shared/shared.module";
import {UxHomeModule} from "./modules/home/home.module";
import {UxButtonModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/button/button.module";
import {UxHeaderModule} from "@netcracker/ux-ng2/dist/ux-components/src/components/header/header.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UxLocalizationComponent} from "./components/localization/localization.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UxLocalStorageService} from "@netcracker/ux-ng2/dist/ux-services/src/local-storage.service";
import {AppRoutingModule} from "./app-routing.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {UxThemeComponent} from "./components/theme/theme.component";
import {UxHammerPluginPatchA6} from "./services/hammer-plugin-a6.patch";


export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        "swipe": {velocity: 0.4, threshold: 20} // override default settings
    };
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "http://localhost:3000/assets/i18n/", ".json");
}

@NgModule({
    declarations: [
        AppComponent,
        UxLocalizationComponent,
        UxThemeComponent
    ],
    providers: [
        UxLocalStorageService,
        {
            provide: EVENT_MANAGER_PLUGINS,
            useClass: UxHammerPluginPatchA6,
            multi: true
        }
    ],
    imports: [
        BrowserModule,
        UxSharedModule,
        HttpClientModule,
        UxHomeModule,
        UxButtonModule,
        UxHeaderModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor() {
    }
}
