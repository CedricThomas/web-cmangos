import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createAccount(account: Account, token?: String) : Observable<Account> {
    const headers = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    }) ;
    return this.http.post<Account>("", account, {headers});
  }
}
