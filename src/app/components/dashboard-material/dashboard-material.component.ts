import { Component,OnInit, Optional, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  template: `
    <h1 matDialogTitle>Add Course</h1>
    <div matDialogContent>
      <form name="addForm" [formGroup]="addForm">
        <mat-form-field>  
            <input matInput #courseName formControlName="courseName" placeholder="Course name">
          <mat-error *ngIf="addForm.controls.courseName.invalid && (addForm.controls.courseName.dirty || addForm.controls.courseName.touched) && addForm.controls.courseName.errors.required">course required</mat-error>
        </mat-form-field>
        <mat-form-field>
          
            <textarea matInput #description formControlName="description" placeholder="Description"></textarea>
          <mat-error *ngIf="addForm.controls.description.invalid && (addForm.controls.description.dirty || addForm.controls.courseName.touched) && addForm.controls.description.errors.required">description required</mat-error>
        </mat-form-field>
      </form>
    </div>
    <div matDialogActions>
      <button mat-raised-button [matDialogClose]>Close</button>
      <button mat-raised-button (click)="addCourse()" [disabled]="addForm.invalid">Add</button>
    </div>
  `,
  styles: ['mat-form-field{ width:100%;margin-bottom:15px;}']
}
)
export class DialogContentComponent {
  addForm = this.fb.group({
    courseName : ['',Validators.required],
    description : ['',Validators.required]
  })
  addCourse = function(){
    let courseData = {
      course : this.addForm.controls.courseName.value,
      image : this.addForm.controls.description.value
    }
    this.cs.addCourseService(courseData)
      .subscribe((response:any)=>{
        console.log(response.data.message);
        //this.getCourses();
        //this.showPopup = false;
        this.dialogRef.close();
        this.addForm.reset();
      },(err)=>{
        console.log(err);
      })
      
  }
  constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>,private fb:FormBuilder,private cs: CommonService) {
      
   }
}

@Component({
  template : `
      <h1 matDialogTitle>Are you sure you want to delete course?</h1>
      <div matDialogActions>
        <button mat-raised-button color="primary" (click)="deleteCourse()">Yes</button>
        <button mat-raised-button [matDialogClose]>No</button>
      </div>
  `,
  styles : []
})
export class ModalPopupComponent{
  constructor( @Optional() public dialogRef: MatDialogRef<DialogContentComponent>,private cs: CommonService) {}
  
}

@Component({
  selector: 'app-dashboard-material',
  templateUrl: './dashboard-material.component.html',
  styleUrls: ['./dashboard-material.component.scss']
})
export class DashboardMaterialComponent implements OnInit {
  isLoading:boolean = false
  showPopup:boolean = false
  deleteCourseId:any = ''
  courses:Array<String>
  @ViewChild('modalPopup',{static: false}) test:any
  constructor(private router:Router,private cs: CommonService,private fb:FormBuilder,private _dialog: MatDialog) {
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
    //this.deleteCourseId = "sdfsdfsdf123";
    this.cs.deleteCourseService(this.deleteCourseId)
      .subscribe((response:any) =>{
        if(response && response.responseCode==200 && response.responseStatus=='success'){
          alert("Course deleted successfully!!");
          this.getCourses();
        }else{
          alert("Unable to delete course,Please try again after some time");
        }
        this.closeDialog();
      },(err)=>{
        this.closeDialog();
        alert("Unable to delete course,Please try again after some time");
      })
  }

  addPopup() {
    const dialogRef = this._dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getCourses();
    })
  }
  openDialog(id){
    //console.log(id)
    this.deleteCourseId = id
    const dialogRef = this._dialog.open(this.test);
    //dialogRef.close();
    dialogRef.afterClosed().subscribe(result=>{

    })
  }
  closeDialog(){
    this._dialog.closeAll();
  }
  ngOnInit() {
    this.getCourses();

  }

}

