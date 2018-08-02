import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../models/user/auth';
import { AuthService } from "../../services/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  auth(event : ILogin) {
    if(event) {
      this.authService.login(event);
    }
  }

}
