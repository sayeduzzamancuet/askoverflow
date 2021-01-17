import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  doAuthentication(userModel: User): Promise<any> {
    localStorage.setItem('token','');
    return new Promise((resolve,reject)=>{
      return this.getToken(userModel).toPromise()
        .then((value)=>{
          localStorage.setItem('token',value);
          value==null?resolve(false):resolve(true)
        })
        .catch(reason => {
          reject(false);
        })
    })
   }


  getToken(userModel: User): Observable<string> {
    const TOKEN_URL = 'http://localhost:11305/api/auth/token';
    const param = {
      'userName' : userModel.name,
      'password' : userModel.password
    };
    const requestHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post<any>(TOKEN_URL, param, {headers: requestHeaders}).pipe(catchError(this.handleErrorFunc));
  }
  handleErrorFunc(error){
    return throwError(error.Message||'server error')
  }
}
