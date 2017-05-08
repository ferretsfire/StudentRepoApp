import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { EnrollmentHistoryService } from './enrollment-history.service';
import { StudentListService } from './student.service';

@Component({
  selector: 'student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css']
  
})
export class StudentListComponent {
  studentList = [];
 @Output() studentId = new EventEmitter();
  
  private sub : any;
  constructor(
    //private enrollmentHistoryService: EnrollmentHistoryService,
    private studentListService: StudentListService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
        this.getStudentList();

      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

 getStudentList() {
    this.studentListService.get()
      .subscribe(response => {
        this.studentList = response;
      });
  }
}
