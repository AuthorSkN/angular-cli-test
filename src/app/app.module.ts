import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UxButtonModule } from '@netcracker/ux-ng2/dist/ux-components/src/components/button/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // UxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
