import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Review from 'src/app/models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  getToken():any{
    return sessionStorage.getItem("token");
  }
  getReviews(){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "authToken "+this.getToken());
    return this.http.get<Review[]>(`http://localhost:8082/api/reviews`, {headers});
  }
  addReview(review:Review, idUser:number, idCategory:number){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "authToken "+this.getToken());
    return this.http.post(`http://localhost:8082/api/reviews`,{review: review, idUser: idUser,idCategory: idCategory}, {headers});
  }
  updateReview(id:number,review:Review){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "authToken "+this.getToken());
    return this.http.put(`http://localhost:8082/api/reviews/${id}`,{review: review}, {headers});
  }
  deleteReview(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "authToken "+this.getToken());
    return this.http.delete(`http://localhost:8082/api/reviews/${id}`, {headers});
  }
  getOneReview(id:number){
    const headers = new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "authToken "+this.getToken());
    return this.http.get(`http://localhost:8082/api/reviews/${id}`, {headers});
  }

}
