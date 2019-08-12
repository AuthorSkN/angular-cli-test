import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UxHomeData} from "../model/home.model";
import {Observable} from "rxjs";

@Injectable()
export class UxHomeService {

    constructor(private http: HttpClient) {
    }

    public getData(): Observable<UxHomeData> {
        return this.http.get<UxHomeData>("http://localhost:3000/home/data");
    }
}
