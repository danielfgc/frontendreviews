import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/main/services/review/review.service';
import Review from 'src/app/models/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
 
  review: Review={
    title:"",
    body:"",
    valoration:0,
    likes:0,
    dislikes:0,
  };
  category:any ="1";
   id:any =null;
  respuesta:string ="";
  constructor(private reviewService:ReviewService,private route:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    if(this.route.snapshot.params["id"])
    this.id = this.route.snapshot.params["id"];
    this.reviewService.getOneReview(this.id).subscribe(
      (data:any)=> this.review=data,
      error=>console.log(error)
      
      
    )
  }
  addReview(){
    let user:any = sessionStorage.getItem("user");
    const idUser=(JSON.parse(user)).id;
    this.reviewService.addReview(this.review,idUser,this.category).subscribe(
      (res:any)=>{
        alert("Review added correctly");
        this.router.navigate(["/home/reviews"])
      },
      error=> this.respuesta="Something went wrong"
    )
  }
  updateReview(){}
  deleteReview(){}
}
