import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {AuthUser} from "../models/Login";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showErrorMessage = false;
  username: String = "";
  password: String = "";

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  loginToServer() {
    if (this.username && this.password) {
      const auth = new AuthUser(this.username, this.password);
      this.apiService.login(auth).subscribe((response: HttpResponse<any>) => {
        const token = response.headers.get("X-Auth-Token");
        localStorage.setItem("token", token);
        localStorage.setItem("username", this.username.toUpperCase().toString());
        this.router.navigate(['/profile']);
      },(err) => {
          console.log(err);
          this.displayErrorMessage();
        }
      );
    } else {
      this.displayErrorMessage();
    }
  }

  displayErrorMessage() {
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3000)
  }
}
