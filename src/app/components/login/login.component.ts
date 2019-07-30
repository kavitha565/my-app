import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:String = ''
  password:String = ''
  constructor(private cs:CommonService,private fb:FormBuilder,private router:Router) { }
  loginForm = this.fb.group({
    username : ['',Validators.required],
    password : ['',Validators.required]
  })
  login(){
    this.cs.loginService(this.username,this.password) //returns an observable which will be subscribed which takes 2 functions - successCallBack and errorCallBack
      .subscribe((response:any)=>{
        //response=JSON.parse(response);
        if(response.responseCode === 200 && response.responseStatus === "success"){
          this.router.navigate(['/dashboard']);
        }else{
          alert(response.data.message);
        }
      },(error)=>{
        alert("Not able to login,Please try again");
      })
  }
  ngOnInit() {
  }

}
