import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, pass:string){
    let headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    let body = {email:email,password: pass };
    return this.http.post("http://localhost:8082/api/login", body, {headers});
  }
  register(username:string,email: string, pass:string ){
    let headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    let body = {username: username, email:email, password: pass};
    return this.http.post("http://localhost:8082/api/register", body, {headers});
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
}
