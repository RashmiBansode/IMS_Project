import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherlistComponent } from './teacher/teacherlist/teacherlist.component';
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
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    StudentlistComponent,
    StudentaddComponent,
    StudenteditComponent,
    TeacherComponent,
    TeacherlistComponent,
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
    StudentDashboardComponent
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
   MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
