import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private emitChangeSource = new Subject();
  changeEmited$ = this.emitChangeSource.asObservable();
  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

  constructor(private _http: HttpClient) { }

  showAll(cb){
    this._http.get("/api/restaurants")
      .subscribe(data => cb(data));
  }

  findById(id, cb){
    this._http.get("/api/restaurants/" + id)
      .subscribe(data => cb(data));
  }

  create(data, cb){
    this._http.post("/api/restaurants", data)
      .subscribe(data => cb(data));
  }

  update(obj, cb){
    this._http.patch("/api/restaurants/" + obj._id, obj)
      .subscribe(data => cb(data));
  }

  destroy(id, cb){
    this._http.delete("/api/restaurants/" + id)
      .subscribe(data => cb(data));
  }

  addReview(id, obj, cb){
    this._http.put("/api/restaurants/" + id + "/review", obj)
      .subscribe( data => cb(data));
  }
}
