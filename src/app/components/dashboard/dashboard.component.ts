import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormBuilder,Validators } from '@angular/forms';
import { nextTick } from 'q';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading:boolean = false
  showPopup:boolean = false
  showDeletePopup:boolean = false
  deleteCourseId:any = ''
  courses:Array<String>
  addForm = this.fb.group({
    courseName : ['',Validators.required],
    image : ['',Validators.required]
  })
  constructor(private router:Router,private cs: CommonService,private fb:FormBuilder) {
  }
  addCourse = function(){
    let courseData = {
      course : this.addForm.controls.courseName.value,
      image : this.addForm.controls.image.value
    }
    this.cs.addCourseService(courseData)
      .subscribe((response:any)=>{
        console.log(response.data.message);
        this.getCourses();
        this.showPopup = false;
        this.addForm.reset();
      },(err)=>{
        console.log(err);
      })
      
  }
  getCourses = function(){
    this.isLoading = true;
    this.cs.getCoursesService()
    .subscribe((response:any)=>{
      if(response && response.responseCode==200 && response.responseStatus=='success'){
        if(response.data && response.data.length>0){
          this.courses = response.data;
        }else{
          alert("No courses found!!");
        }
      }else{
        alert("Unable to fetch courses,Please again later");
      }
      this.isLoading = false;
    },(err)=>{
      console.log(err);
      alert("Unable to fetch courses,Please again later");
      this.isLoading = false;
    })
  }
  deleteCourse(){
    //delete course using id
    this.isLoading = true;
    //this.deleteCourseId = "sdfsdfsdf123";
    this.cs.deleteCourseService(this.deleteCourseId)
      .subscribe((response:any) =>{
        if(response && response.responseCode==200 && response.responseStatus=='success'){
          alert("Course deleted successfully!!");
          this.getCourses();
        }else{
          alert("Unable to delete course,Please try again after some time");
        }
        this.isLoading = false;
        this.showDeletePopup = false;
      },(err)=>{
        this.isLoading = false;
        alert("Unable to delete course,Please try again after some time");
        this.showDeletePopup = false;
      })
  }
  ngOnInit() {
    
    // this.cs.testObservable()  
    //   .subscribe({
    //   next(msg) { console.log(msg); },  // to get stream of data
    //   complete() { console.log('Finished sequence'); }
    // });
    this.getCourses();

  }
}
