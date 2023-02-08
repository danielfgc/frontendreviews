import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: String, pass:String){
    let headers = new HttpHeaders({"Content-Type":"application/json"});
    let body = {email:email,password: pass };
    return this.http.post("http://localhost:8082/api/login", body, {headers});
  }
  register(email: String, pass:String, username:String){
    let headers = new HttpHeaders({"Content-Type":"application/json"});
    let body = {username: username,email:email, password: pass};
    return this.http.post("http://localhost:8082/api/register", body, {headers});
  }
  toggleForm(){
    const container:any = document.querySelector('.container');
    container.classList.toggle('active');
  }
}
