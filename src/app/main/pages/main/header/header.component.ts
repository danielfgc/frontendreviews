import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logged:boolean = sessionStorage.getItem("token")!= null;
  constructor(private router: Router){}
  signIn(){
    this.router.navigate(["login"],{fragment:"login"});
  }
  signUp(){
    this.router.navigate(["login"], {fragment:"register"});
  }
  signOut(){
    sessionStorage.clear();
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
