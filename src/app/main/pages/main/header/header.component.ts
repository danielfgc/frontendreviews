import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  logged:boolean = true;
  
  constructor(private router: Router, private sessionService:SessionStorageService){}
  ngOnInit(): void {
    this.sessionService.data.subscribe(
      res=> this.logged= res != null
    )
  }
  signIn(){
    this.router.navigate(["login"],{fragment:"login"});
  }
  signUp(){
    this.router.navigate(["login"], {fragment:"register"});
  }
  signOut(){
    this.sessionService.clearAllLocalStorage();
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
