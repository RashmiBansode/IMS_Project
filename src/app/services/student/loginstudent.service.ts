import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginstudentService {

  constructor(private login:HttpClient) { }

  baseurl='http://13.233.50.4:8080'

  loginpostdata(body:any){
    return this.login.post(`${this.baseurl}/student/login`,body,{responseType:'text'})
  }
}
 