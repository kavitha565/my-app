import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  currentRoute = '';
  isLogin:boolean = false;
  constructor(private location:Location,private authService:AuthService){
   this.isLogin = authService.authStatus()
  }
  changeOfRoutes(){
    console.log("Current route is"+this.location.path())
    this.currentRoute = this.location.path();
    this.isLogin = this.authService.authStatus()
  }
  // ngOnInit(){
  //   console.log("Current route is"+this.location.path())
  //   this.currentRoute = this.location.path();
  // }
  // ngOnChanges(){
  // }
}
