import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  rootUrl : string = "https://localhost:7148/"; //port of api
  constructor(private http: HttpClient) { }

  createStudent(form: any){
    return this.http.post(this.rootUrl + 'Student/CreateStudent', form);
  }

  deleteStudent(form: any){
    return this.http.post(this.rootUrl + 'Student/DeleteStudent', form);
  }
}
