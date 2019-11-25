export class AccountCreation {
  constructor(username: String, password: String, repeat: String, email: String) {
    this.username = username;
    this.password = password;
    this.repeat =  repeat;
    this.email = email;
  }

    username: String;
    password: String;
    repeat: String;
    email: String;
}
