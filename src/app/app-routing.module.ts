import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FeesCollectionComponent } from './fees-collection/fees-collection.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { HomeComponent } from './home/home.component';
import { TeacheraddComponent } from './teacher/teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacher/teacheredit/teacheredit.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
import { TeacherviewComponent } from './teacher/teacherview/teacherview.component';
import { RegisterComponent } from './register/register.component';

import { AddsubjectComponent } from './subject/addsubject/addsubject.component';
import { EditsubjectComponent } from './subject/editsubject/editsubject.component';
import { ListsubjectComponent } from './subject/listsubject/listsubject.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';



const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},

  {path:'teacherlist',component:TeacherlistComponent},
      {path:'teacheradd',component:TeacheraddComponent},
     {path:'teacheredit',component:TeachereditComponent},
     {path:'teacherview',component:TeacherviewComponent},
  {path:'liststudent',component:ListstudentComponent},
      {path:'addstudent',component:AddstudentComponent},
     {path:'editstudent',component:EditstudentComponent},
     {path:'viewstudent',component:ViewstudentComponent},
{path:'teacherlist',component:TeacherlistComponent},
      {path:'teacheradd',component:TeacheraddComponent},
     {path:'teacheredit',component:TeachereditComponent},
     {path:'teacherview',component:TeacherviewComponent},
  


  {path:'listsubject',component:ListsubjectComponent},
  {path:'addsubject', component:AddsubjectComponent},
  {path:'editsubject',component:EditsubjectComponent},

  {path:'departmentlist', component:DepartmentListComponent},
  {path:'departmentadd', component:DepartmentAddComponent},
  {path:'departmentedit', component:DepartmentEditComponent},
  {path:'feesCollection', component:FeesCollectionComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'teachDash',component:TeacherDashboardComponent},
  {path:'studentDash',component:StudentDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
