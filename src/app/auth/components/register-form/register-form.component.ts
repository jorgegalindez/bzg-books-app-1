import { Component, OnInit } from '@angular/core';
import { Login, ILogin } from '../../models/user/auth';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.login = new Login();
    this.errorMessage = '';
  }

  login: ILogin;
  errorMessage: string;

  ngOnInit() {
  }

  signup() {   
    this.authService.signup(this.login)
      .then(
        auth => {
          this.router.navigate(['/login']);
        },
        error => {          
          this.errorMessage = error.message;
        }
      );
  }
}
