import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { routes } from '../routes/routes';
import { URL_FRONTEND } from 'src/app/config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {}

  public login(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.adminDashboard]);
    // let URL =URL_FRONTEND+"/auth/login"; 
    
  }
}
