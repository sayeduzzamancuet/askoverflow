import { Injectable } from '@angular/core';
import {HttpHeaders, HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req,next) {
    let token='Bearer '+localStorage.getItem('token')
    let requestHeaders = new HttpHeaders().append('Accept', 'application/json').append('Authorization',token);

    let clonedRequest=req.clone({
      headers: requestHeaders,
      url: 'http://localhost:11305/api/'+req.url
    })
    return next.handle(clonedRequest);
  }
}
