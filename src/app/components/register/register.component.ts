import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormData:any = {
    name : "",
    email : "",
    mobile : "",
    username : "",
    password : ""
  }
  constructor(private fb:FormBuilder,private cs:CommonService,private router:Router) { }
  registerForm = this.fb.group({
    name : ['',Validators.required],
    email : ['',Validators.required],
    mobile : ['',Validators.required],
    username : ['',Validators.required],
    password : ['',Validators.required], 
  })
  register(registerForm){
    console.log(registerForm);
    this.registerFormData.name = registerForm.controls.name.value;
    this.registerFormData.email = registerForm.controls.email.value;
    this.registerFormData.mobile = registerForm.controls.mobile.value;
    this.registerFormData.username = registerForm.controls.username.value;
    this.registerFormData.password = registerForm.controls.password.value;
    this.cs.registerService(this.registerFormData)
      .subscribe((response:any)=>{
        //response=JSON.parse(response);
        if(response.responseCode === 200 && response.responseStatus === "success"){
          this.router.navigate(['/login']);
        }else{
          alert(response.data.message);
        }
      },(error)=>{
        console.log(error);
        alert("Error occured in Register,Please try again");
      })
  }
  ngOnInit() {
  }

}
