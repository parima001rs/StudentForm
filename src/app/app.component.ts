import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentFormApp';

  constructor(private studentservices : StudentService) {}

  getStudentData(formValue : any)
  {
    console.log(formValue);

    this.studentservices.createStudent(formValue)
    .subscribe((data: any) => {
      console.log(data);
    });
  }
}
