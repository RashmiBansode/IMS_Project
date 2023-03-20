import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegstudentService } from 'src/app/services/student/regstudent.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {


  studentform=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    gender:new FormControl(),
    address:new FormControl(),
    dob:new FormControl(),
    education:new FormControl(),
    course:new FormControl(),
    passingYear:new FormControl(),
  })

  constructor(private stud:RegstudentService){}

  savestud(){
    this.stud.savestuddata(this.studentform.value).subscribe(res=>console.log(res))
    alert("Added Successful")
    this.studentform.reset()
  }
}
