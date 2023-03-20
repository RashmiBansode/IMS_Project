import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';

import { TeacheraddComponent } from './teacher/teacheradd/teacheradd.component';

import { TeachereditComponent } from './teacher/teacheredit/teacheredit.component';
import { TeacherviewComponent } from './teacher/teacherview/teacherview.component';


import { AddsubjectComponent } from './subject/addsubject/addsubject.component';
import { ListsubjectComponent } from './subject/listsubject/listsubject.component';
import { EditsubjectComponent } from './subject/editsubject/editsubject.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { FeesCollectionComponent } from './fees-collection/fees-collection.component';
import { RegisterComponent } from './register/register.component';

 import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './dashboard/student-dashboard/student-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
// ---------------------------dashboard---------------
import { CalendarModule, DatePickerModule, DateRangePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AttendancestudComponent } from './attendance/attendancestud/attendancestud.component';
import { ViewattendanceComponent } from './attendance/viewattendance/viewattendance.component';




@NgModule({
  declarations: [  
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
TeacherlistComponent,
    TeacheraddComponent,
   TeacherviewComponent,
    TeachereditComponent,
 AddsubjectComponent,
    ListsubjectComponent,
    EditsubjectComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    FeesCollectionComponent,
    RegisterComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    AddstudentComponent,
    ListstudentComponent,
    EditstudentComponent,
    ViewstudentComponent,
    AttendancestudComponent,
    ViewattendanceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   MaterialModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
   NgApexchartsModule,
   CalendarModule,
    DatePickerModule,
     TimePickerModule, 
     DateRangePickerModule,
      DateTimePickerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
