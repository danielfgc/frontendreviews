import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correo:string = "";
  pass: string = "";
  respuesta:string="";
  constructor(private authService: AuthService, private router:Router){}

  toggleForm(){
    this.authService.toggleForm();
  }
  login(){
    this.authService.login(this.correo, this.pass).subscribe((response:any)=> {
      console.log(response)
      this.respuesta="";
      if(response.error==null){
        this.router.navigate(["/home"]);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        sessionStorage.setItem("token", response.data.token);
      }
    },(error)=>{
      this.respuesta='Email or password are incorrect';
      console.log(error);
  });
  }
}
