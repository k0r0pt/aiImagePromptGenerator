import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GenOptsService {

  constructor(private http: HttpClient) { }

  public getJSON(genOpt: string): Observable<any> {
    return this.http.get(`../assets/settings/${genOpt}.json`);
  }
}