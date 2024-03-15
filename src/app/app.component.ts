import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Array-operator';
  students: Student[] = [
    new Student("Neha", 20, "Computer Science", 90),
    new Student("Maya", 21, "Artificial Intelligence", 98),
    new Student("Abhay", 19, "Mechanical Engineering", 52),
    new Student("Sona", 22, "Cyber Security", 79)
  ];
  selectedField: string = 'name';
  searchTerm: string = '';
  minMarks: number = 0;
  sortStudents() {
    this.students.sort((a, b) => {
      if (a[this.selectedField] < b[this.selectedField]) {
        return -1;
      }
      if (a[this.selectedField] > b[this.selectedField]) {
        return 1;
      }
      return 0;
    });
  }
  filterStudents() {
    this.students = this.students.filter(student => {
      const searchString = this.searchTerm.toLowerCase();
      return student.name.toLowerCase().includes(searchString) ||
             student.department.toLowerCase().includes(searchString);
    });
  }

  filterStudentsByMarks() {
    if (!this.minMarks) {

      this.resetStudents();
      return;
    }
    this.students = this.students.filter(student => student.totalMarks > this.minMarks);
  }
  resetStudents() {
    this.students = [
        new Student("Neha", 20, "Computer Science", 90),
        new Student("Maya", 21, "Artificial Intelligence", 98),
        new Student("Abhay", 19, "Mechanical Engineering", 52),
        new Student("Sona", 22, "Cyber Security", 79)
    ];
  }
}
class Student {
  [key: string]: any;
  constructor(
    public name: string,
    public age: number,
    public department: string,
    public totalMarks: number
  ) {}
}