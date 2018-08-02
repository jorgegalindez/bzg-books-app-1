import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ILogin } from "../../models/user/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(auth : ILogin) {
    localStorage.setItem('bzgBooksAppToken', JSON.stringify(auth));
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('bzgBooksAppToken');
    this.router.navigate(['/login']);
  }
}
