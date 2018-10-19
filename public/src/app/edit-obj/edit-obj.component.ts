import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowAllObjsComponent } from '../show-all-objs/show-all-objs.component';

@Component({
  selector: 'app-edit-obj',
  templateUrl: './edit-obj.component.html',
  styleUrls: ['./edit-obj.component.css']
})
export class EditObjComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter;
  private restaurant: any = {};

  constructor(private _restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._restaurantService.findById(params.id, data => {
        if (!data || data.errors) this.restaurant.errors = data.errors;
        else this.restaurant = data;
      })
    })
  }

  edit() {
    this._restaurantService.update(this.restaurant, data => {
      if (data.errors) this.restaurant.errors = data.errors;
      else{
        this._restaurantService.emitChange("Data from child");
        this.router.navigateByUrl('/restaurants');
      }
    })
  }
}
