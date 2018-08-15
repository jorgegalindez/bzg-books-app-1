import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from '../../models/user/auth';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  signup(event: ILogin) {
    if (event) {
      this.authService.signup(event)
        .then(
          auth => {
            this.router.navigate(['/login']);
          },
          error => {
            alert("Usuario o Contraseña Invalida.");
          }
        );
    }
    else {
      alert("Usuario o Contraseña Invalida.222");
    }
  }

}
