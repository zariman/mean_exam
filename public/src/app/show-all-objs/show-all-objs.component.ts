import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-show-all-objs',
  templateUrl: './show-all-objs.component.html',
  styleUrls: ['./show-all-objs.component.css']
})
export class ShowAllObjsComponent implements OnInit {
  private restaurants: any;
  constructor(private _restuarantService: RestaurantService) {
    this._restuarantService.changeEmited$.subscribe(text => {
      this._restuarantService.showAll(data => {
        this.restaurants = data;
      })
    });
  }

  ngOnInit() {
    this._restuarantService.showAll(data => {
      this.restaurants = data;
    })

  }

  delete(id: any) {
    this._restuarantService.destroy(id, data => {
      if (data.errors) return;
      else this.ngOnInit();
    })
  }

  isExpired(t1: any) {
    if (Date.now() - Date.parse(t1) > 30000) return true;
    else return false;
  }
}
