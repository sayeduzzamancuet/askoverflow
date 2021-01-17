import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user';
import {catchError } from 'rxjs/operators';
import {Question} from '../models/question';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  API_URL = 'http://localhost:11305/api/';
  token='Bearer '+localStorage.getItem('token')
  requestHeaders = new HttpHeaders().append('Accept', 'application/json').append('Authorization',this.token);

  constructor(private httpClient: HttpClient) { }
  fetchDemoData(company: string,stack:string,position:string): Observable<any>{
    let params=new HttpParams({
      fromObject: {
       'company': company,
       'stack': stack,
       'position': position
      }
    });
    return this.httpClient.get(this.API_URL.concat('question/find'),{ params: params,headers: this.requestHeaders})
  }
  AddNewTopic(question: Question): Observable<any>{
    return this.httpClient.post<any>(this.API_URL.concat('question/add'), question, {headers: this.requestHeaders})
  }

}
