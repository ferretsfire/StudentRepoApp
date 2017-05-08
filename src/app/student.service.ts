import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class StudentListService {
  constructor(private http: Http) {}

  get() {
    let username : string = 'authentica';
    let password : string = '@uth3nt1c@';
    let headers: Headers = new Headers()
      headers.append('Authorization', 'Basic ' +
      btoa(username + ":" + password));
    console.log('Authorization', 'Basic ' + btoa(username + ":" + password));
    return this.http.get('http://interviewapi20170221095727.azurewebsites.net/api/Student/All', {headers : headers})
      .map(response => {
        response.json();
        console.log(response.json());
        return response.json();
      });
  }
  
}
