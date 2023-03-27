import { Component } from '@angular/core';

import { RegstudentService } from 'src/app/services/student/regstudent.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {

  constructor(private allstud:RegstudentService){this.getallstud()}
  studentlist:any
  getallstud(){
    this.allstud.getallstud().subscribe(res=>this.studentlist=res)
  }

  deletestud(id:number){
    this.allstud.deletestuddata(id).subscribe((res)=>console.log(res))
    alert("Deleted Successful")
    this.getallstud()
  }

}
