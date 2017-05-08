import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GradeHistoryService } from './grade-history.service';



@Component({
  selector: 'grade-history-list',
  templateUrl: 'student-grade-history.component.html',
  styleUrls: ['student-list.component.css']
})
export class GradeHistoryComponent {
  
  @Input() studentId : number;
  gradeHistory = [];
  private sub: any;

  constructor(
    private gradeHistoryService: GradeHistoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => {
        this.getGradeHistory(this.studentId)
    });
  }
 


  getGradeHistory(studentId) {
    this.gradeHistoryService.get(studentId)
      .subscribe(gradeHistory => {
        this.gradeHistory = gradeHistory;
      });
  }
  
}
