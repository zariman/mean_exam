import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-obj',
  templateUrl: './new-obj.component.html',
  styleUrls: ['./new-obj.component.css']
})
export class NewObjComponent implements OnInit {
  private restaurant: any = {};

  constructor(private _restaurantService: RestaurantService, private _route: Router) { }

  ngOnInit() {
  }

  create(){
    this._restaurantService.create(this.restaurant, data => {
      if(data.errors) this.restaurant.errors = data.errors;
      else{
        this.restaurant = {};
        this._route.navigateByUrl('/restaurants')
      } 
    })
  }

}
