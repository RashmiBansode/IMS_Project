import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegstudentService } from 'src/app/services/student/regstudent.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {
studentid:any
constructor(private Sserve:RegstudentService,
  private activateRoute:ActivatedRoute)

{
 
this.getstuddatabyid()
}

  studentform=new FormGroup({
    address:new FormControl(),
    batchCode:new FormControl(),
    course:new FormControl(),
    createdOn:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    education:new FormControl(),
    firstName:new FormControl(),
    gender:new FormControl(),
    studentId:new FormControl(),
    password:new FormControl(),
    id:new FormControl(),
    lastName:new FormControl(),
    mentorId:new FormControl(),
    mobile:new FormControl(),
    passingYear:new FormControl(),
    updateOn:new FormControl(),
    tempPassword:new FormControl(),
    active:new FormControl(),
    mentor:new FormControl(),
    incomeId:new FormControl(),
    basePackage:new FormControl(),
    formalContractRecived:new FormControl(),
    formalContractGenerated:new FormControl(),
    contractSent:new FormControl(),
    mentorOpted:new FormControl(),
    
  })

  updatestud(){
    this.Sserve.updatestuddata(this.studentform.value).subscribe((res)=>console.log(res))
    alert("Updated Successful")
  }
  getstuddatabyid(){
    this.Sserve.getstuddatabyid(this.activateRoute.snapshot.params['id']).subscribe((res:any)=>(this.studentform.setValue(res)))
  }
 
}
