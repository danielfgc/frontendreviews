import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getToken():any{
    return sessionStorage.getItem("token");
  }
  updateUser(id:number, username:string,email: string, pass:string){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", this.getToken());
    let body = {username: username, email:email, password: pass};
    return this.http.put(`http://localhost:8082/api/users/${id}`,body, {headers});
  }
}
