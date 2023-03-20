import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activateRoute:ActivatedRoute){

    activateRoute.params.subscribe((param)=>this.loginData=param)
  }

  loginData:any
}
