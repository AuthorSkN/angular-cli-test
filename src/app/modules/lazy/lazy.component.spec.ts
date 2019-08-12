import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {By} from "@angular/platform-browser";
import {UxLazyComponent} from "./lazy.component";
import {UxLazyModule} from "./lazy.module";

describe("UxHomeComponent", () => {

    let fixture: ComponentFixture<UxLazyComponent>,
        component: UxLazyComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                UxLazyModule,
                HttpClientModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    }
                })
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(UxLazyComponent);
        component = fixture.componentInstance;
    });

    it("UxHomeComponent check initial lazy text", () => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("h2")).nativeElement.innerHTML).toBe(component.lazyText);
    });

    it("UxHomeComponent check lazy text setup", () => {
        component.lazyText = "Test text";

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("h2")).nativeElement.innerHTML).toBe("Test text");
    });
});
