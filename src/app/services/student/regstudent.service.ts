import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegstudentService {

  constructor(private httpS:HttpClient) { }
  baseurl:string='http://13.233.50.4:8080'

  savestuddata(body:any){
    return this.httpS.post(`${this.baseurl}/student/register`,body)

  }

  getallstud(){
    return this.httpS.get(`${this.baseurl}/student/all`)
  }

  getstuddatabyid(id:number){
    return this.httpS.get(`${this.baseurl}/student/${id}`)
  }

  deletestuddata(id:number){
    return this.httpS.delete(`${this.baseurl}/student/${id}`)
  }

  updatestuddata(body:any){
    return this.httpS.put(`${this.baseurl}/student/updateStudent`,body)
  }
  
}
