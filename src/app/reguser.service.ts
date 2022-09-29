import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {UserReg} from './user';
import { Observable } from 'rxjs';
import configvar from './configvar';

@Injectable({
  providedIn: 'root'
})
export class ReguserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public registerUser(userdata: UserReg): Observable<any> {
    let url = configvar.url + ":" + configvar.port
    return this.http.post<any>(url,userdata, this.httpOptions);
  }
}
