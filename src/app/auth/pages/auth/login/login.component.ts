import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  correo:string = "";
  pass: string = "";
  respuesta:string="";
  constructor(private sessionService:SessionStorageService,private authService: AuthService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    if(this.route.snapshot.fragment==="register"){
      this.toggleForm()
    }
  }

  toggleForm(){
    this.authService.toggleForm();
  }
  login(){
    this.authService.login(this.correo, this.pass).subscribe((response:any)=> {
      this.respuesta="";
        this.sessionService.setInfo(response);
        this.router.navigate(["/home"]);
    },(error)=>{
      this.respuesta='Email or password are incorrect';
      console.log(error);
  });
  }
}
