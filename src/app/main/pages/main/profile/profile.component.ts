import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  username: string = "";
  correo: string = "";
  pass: string = "";
  repPass: string = "";
  respuesta: string = "";
}
