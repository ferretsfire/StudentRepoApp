import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { lookupListToken, lookupLists } from './providers';
import { routing } from './app.routing';
import { StudentListService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { EnrollmentHistoryComponent } from './student-enrollment-history.component';
import { EnrollmentHistoryService } from './enrollment-history.service';
import { GradeHistoryComponent } from './student-grade-history.component';
import { GradeHistoryService } from './grade-history.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
    ],
  declarations: [
    AppComponent,
    StudentListComponent,
    EnrollmentHistoryComponent,
    GradeHistoryComponent
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    StudentListService,
    EnrollmentHistoryService,
    GradeHistoryService   
  ], 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}