import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-obj',
  templateUrl: './review-obj.component.html',
  styleUrls: ['./review-obj.component.css']
})
export class ReviewObjComponent implements OnInit {

  private restaurant: any = {};
  private review: any = {};

  constructor(private _restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._restaurantService.findById(params.id, data => {
        if (!data || data.errors) this.restaurant.errors = data.errors;
        else this.restaurant = data;
      })
    })
  }

  addReview() {
    this._restaurantService.addReview(this.restaurant._id, this.review,data => {
      if (data.errors) this.review.errors = data.errors;
      else this.router.navigateByUrl('/restaurants' + this.restaurant._id)
    })
  }
}
