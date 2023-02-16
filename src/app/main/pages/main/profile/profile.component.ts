import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import CanComponentDeactivate from 'src/app/main/services/guards/canDeactivateGuard/CanDeactivateComponent';
import { UserService } from 'src/app/main/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, CanComponentDeactivate{
  
  constructor(private userService:UserService, private router: Router){}
  changesSaved=false;
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
      
      (res)=>{ this.respuesta="Profile updated"
      this.changesSaved = true;
    },
      error=> console.log("Error:",error)
    )
  }
  onDelete(){
  
    if(confirm("You are up to delete your profile, do you want to proceed?")){
    let user:{id:number, username:string, email:string };
    const usertxt:any = sessionStorage.getItem("user");
    user = JSON.parse(usertxt);
    this.userService.deleteUser(user.id).subscribe(res=>console.log(res),
    error=>{
      alert(error.error.text);
      sessionStorage.clear();
      this.router.navigate(["home"]);
    }
    )
  }
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.changesSaved){
      return confirm("Do you want to discard changes?");
    }
    return true;
  }
}
