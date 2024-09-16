import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class JsonFetchService {

  constructor(private http: HttpClient) { }

  public getJSON(path: string, jsonFile: string): Observable<any> {
    return this.http.get(`../assets/${path.concat("/").concat(jsonFile)}.json`);
  }
}