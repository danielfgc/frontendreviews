import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = "";
  correo: string = "";
  pass: string = "";
  repPass: string = "";
  respuesta: string = "";
  constructor(private authService: AuthService) { }

  register() {
    if (this.pass != this.repPass) {
      this.respuesta = "Passwords don't match";
      return;
    }
    this.authService.register(this.username, this.correo, this.pass).subscribe((res) => console.log(res)
      , (error) => {
        if (error.error.text === "user created") {
          window.alert("registered successful");
          this.respuesta = "";
          this.authService.toggleForm();
          return;
        }
        this.respuesta = `${error.error.text} `;
      });

  }
  toggleForm() {
    this.authService.toggleForm();
  }
}
