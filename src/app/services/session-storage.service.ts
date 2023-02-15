import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private _data= new BehaviorSubject<any>(null);
  public data = this._data.asObservable();
  constructor() { }
  setInfo(data: any) {
    const jsonUser = JSON.stringify(data.user);
    sessionStorage.setItem('user', jsonUser);
    sessionStorage.setItem("token", data.accessToken);
    this._data.next(data.accessToken)
 }

 loadInfo() {
    const data = JSON.parse(""+sessionStorage.getItem('token'));
    this._data.next(data)
 }

 clearInfo() {
    sessionStorage.removeItem('token')
    this._data.next(null)
 }

 clearAllLocalStorage() {
    sessionStorage.clear();
    this._data.next(null);
 }
}
