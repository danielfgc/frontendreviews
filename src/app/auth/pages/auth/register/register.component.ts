import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  username:string = "";
  correo:string = "";
  pass: string = "";
  repPass: string = "";
  respuesta:string="";
  constructor(private authService: AuthService){}

  register(){
    if(this.pass!=this.repPass){
      this.respuesta="Passwords don't match";
      return;
    }
    this.authService.register( this.username,this.correo,this.pass).subscribe((response:any)=>{
  
        window.alert("registered successful");
        this.respuesta="";
        this.authService.toggleForm();
      
    },(error)=>{
      this.respuesta = `${error.error.message} `;
      console.log(error);
    });
    
  }
  toggleForm(){
    this.authService.toggleForm();
  }
}
