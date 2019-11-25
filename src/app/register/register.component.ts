import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {AccountCreation} from "../models/AccountCreation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: String = '';
  password: String = '';
  repeat: String = '';
  email: String = '';
  token: String = '';
  errorMessage: String = '';
  accountCreationValidation = false;
  showErrorMessage = false;


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  createAccount() {
    if (this.password === this.repeat && this.username && this.password && this.email) {
      const accountToCreate = new AccountCreation(this.username, this.password, this.repeat, this.email);
      this.apiService.createAccount(accountToCreate, this.token).subscribe((response) => {
        this.clearDatas();
        this.accountCreationValidation = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000)
      });
    } else {
      this.errorMessage = "Passwords are not the same.";
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000)
    }
  }

  clearDatas() {
    this.username = "";
    this.password = "";
    this.repeat = "";
    this.email = "";
    this.token = "";
  }

}
