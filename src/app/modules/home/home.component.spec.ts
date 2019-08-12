import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {UxHomeComponent} from "./home.component";
import {UxHomeModule} from "./home.module";
import {UxHomeService} from "./services/home.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {By} from "@angular/platform-browser";
import {ReplaySubject} from "rxjs";

describe("UxHomeComponent", () => {

    let fixture: ComponentFixture<UxHomeComponent>,
        component: UxHomeComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                UxHomeModule,
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
        fixture = TestBed.createComponent(UxHomeComponent);
        component = fixture.componentInstance;
    });

    it("UxHomeComponent check initial greetings text", () => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("h2")).nativeElement.innerHTML).toBe(component.greetingsText);
    });

    it("UxHomeComponent check greetings text setup", () => {
        component.greetingsText = "Test text";

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("h2")).nativeElement.innerHTML).toBe("Test text");
    });

    it("UxHomeComponent service data ", () => {
        let homeService = fixture.debugElement.injector.get(UxHomeService);
        let data = new ReplaySubject(1);
        spyOn(homeService, 'getData').and.returnValue(data);
        data.next({text: "Test service"});

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css("span")).nativeElement.innerHTML).toBe("Test service");
    });
});
