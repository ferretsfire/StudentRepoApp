import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EnrollmentHistoryService } from './enrollment-history.service';



@Component({
  selector: 'enrollment-history-list',
  templateUrl: 'student-enrollment-history.component.html',
  styleUrls: ['student-list.component.css']
})
export class EnrollmentHistoryComponent {
  
  @Input() studentId : number;
  enrollmentHistory = [];
  private sub: any;

  constructor(
    private enrollmentHistoryService: EnrollmentHistoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => {
        this.getEnrollmentHistory(this.studentId)
    });
  }
 


  getEnrollmentHistory(studentId) {
    this.enrollmentHistoryService.get(studentId)
      .subscribe(enrollmentHistory => {
        this.enrollmentHistory = enrollmentHistory;
      });
  }
  
}
