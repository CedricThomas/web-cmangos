import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from "rxjs";
import {AccountCreation} from "../models/AccountCreation";
import {environment} from "../../environments/environment";
import {AuthUser} from "../models/Login";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createAccount(account: AccountCreation, token?: String) : Observable<AccountCreation> {
    const headers = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    }) ;
    return this.http.post<AccountCreation>(`${environment.api_url}/account`, account, {headers});
  }

  login(login: AuthUser) : Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Basic ${btoa(`${login.username}:${login.password}`)}`,
    });
    return this.http.post<HttpResponse<any>>(`${environment.api_url}/account/auth`, login, {headers, observe: 'response'});
  }
}
