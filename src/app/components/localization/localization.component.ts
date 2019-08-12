import {Component, HostBinding, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'ux-localization',
    templateUrl: 'localization.component.html'
})

export class UxLocalizationComponent implements OnInit {
    /** @internal */
    public _languages: string[];

    @HostBinding('class') classes = 'ux-localization';

    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('en');
    }

    ngOnInit() {
        this._languages = ['en', 'ru'];
    }

    /** @internal */
    public _onLanguageChange(language: string): void {
        this.translateService.use(language.toLowerCase());
    }

}