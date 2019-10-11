import { Injectable } from '@angular/core';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentRoute:string = ''
  authStatus(){
    this.currentRoute = this.location.path();
    if(this.currentRoute == '/login'|| this.currentRoute == '/register')
    return false
    else
    return true
  }
  constructor(private location:Location) { }
}
