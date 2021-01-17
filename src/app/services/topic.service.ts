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

  constructor(private httpClient: HttpClient) { }
  fetchDemoData(company: string,stack:string,position:string): Observable<any>{
    let API_URL = 'question/find';
    let params=new HttpParams({
      fromObject: {
       'company': company,
       'stack': stack,
       'position': position
      }
    });
    return this.httpClient.get(API_URL,{ params: params})
  }
  AddNewTopic(question: Question): Observable<any>{
    let API_URL = 'question/add';
    return this.httpClient.post<any>(API_URL, question)
  }
  getListedCompanies(): Observable<any>{
    let API_URL = 'question/companies';
    return this.httpClient.get<any>(API_URL)
  }

}
