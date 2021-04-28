import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1, 'name': 'Learn Angular','description':'Level up your tech skills with free access to Pluralsight Skills all month. Start now! Thousands of tech courses. Offline Access. Skills Assessments. Learning Paths. Live Mentoring. Courses: Software Development, IT Ops, Creative Professional','image':'../../assets/angular.jpg'},
    {'id':2, 'name': 'Learn nodejs','description':'Level up your tech skills with free access to Pluralsight Skills all month. Start now! Thousands of tech courses. Offline Access. Skills Assessments. Learning Paths. Live Mentoring. Courses: Software Development, IT Ops, Creative Professional','image':'../../assets/nodejs1.jpg'},
    {'id':3, 'name': 'Learn reactjs','description':'Level up your tech skills with free access to Pluralsight Skills all month. Start now! Thousands of tech courses. Offline Access. Skills Assessments. Learning Paths. Live Mentoring. Courses: Software Development, IT Ops, Creative Professional','image':'../../assets/reactjs.png'},
    {'id':4, 'name': 'Learn typescript','description':'Level up your tech skills with free access to Pluralsight Skills all month. Start now! Thousands of tech courses. Offline Access. Skills Assessments. Learning Paths. Live Mentoring. Courses: Software Development, IT Ops, Creative Professional','image':'../../assets/typescript.jpg'},
  ]

}
