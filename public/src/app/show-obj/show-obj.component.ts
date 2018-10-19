import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-obj',
  templateUrl: './show-obj.component.html',
  styleUrls: ['./show-obj.component.css']
})
export class ShowObjComponent implements OnInit {
  private restaurant: any;

  constructor(private _restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._restaurantService.findById(params.id, data => {
        if (!data || data.errors) this.restaurant.errors = data.errors;
        else{
          this.restaurant = data;
          this.restaurant.reviews = data.reviews.sort((a, b) => b.stars-a.stars);
        }
      })
    })
  }
}
