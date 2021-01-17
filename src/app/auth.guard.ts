import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // tslint:disable-next-line:variable-name
  constructor(private _autenticationhService: AuthService, private _router: Router) {
  }
  canActivate(): boolean {
    if ( localStorage.getItem('token') ){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}
