import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/main/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  
  constructor(private userService:UserService){}
  
  username: string = "";
  correo: string = "";
  pass: string = "";
  repPass: string = "";
  respuesta: string = "";  
  
  ngOnInit(): void {
    let user:{id:number, username:string, email:string };
    const usertxt:any = sessionStorage.getItem("user");
    user = JSON.parse(usertxt);
    this.username = user.username;
    this.correo = user.email;
  }
  onUpdate(){
    if (this.pass != this.repPass) {
      this.respuesta = "Passwords don't match";
      return;
    }
    let user:{id:number, username:string, email:string };
    const usertxt:any = sessionStorage.getItem("user");
    user = JSON.parse(usertxt);
    this.userService.updateUser(user.id,this.username, this.correo, this.pass).subscribe(
      res=> console.log("success: "+res),
      error=> console.log("Error:",error)
    )
  }
}
