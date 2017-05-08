import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GradeHistoryService {
  constructor(private http: Http) {}

  get(studentId) {
    let username : string = 'authentica';
    let password : string = '@uth3nt1c@';
    let searchParams = new URLSearchParams();
    searchParams.append('studentId', studentId);
    let headers: Headers = new Headers()
    headers.append('Authorization', 'Basic ' +
    btoa(username + ":" + password));
    let options = new RequestOptions({ headers: headers, search: searchParams });
    return this.http.get('http://interviewapi20170221095727.azurewebsites.net/api/Student/AssignmentHistory', options)
      .map(response => {
        response.json();
        console.log(response.json());
        return response.json();
      });
  }
  

}
