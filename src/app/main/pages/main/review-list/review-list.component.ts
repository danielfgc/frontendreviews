import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/main/services/review/review.service';
import Review from 'src/app/models/Review';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit{
  reviews:Review[]=[];
  logged:boolean = true;
  constructor(private reviewService:ReviewService,private sessionService:SessionStorageService, private router:Router){}

  getReviews(){
    this.reviewService.getReviews().subscribe(
      (res:Review[])=>{
        console.log(res);
        this.reviews = res;
        
      }
    )
      this.sessionService.data.subscribe(
        res=> this.logged= res != null
      )
  }
  ngOnInit(): void {
      this.getReviews();
      console.log(this.reviews);
  }


  
}
