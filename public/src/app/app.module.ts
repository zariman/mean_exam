import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditObjComponent } from './edit-obj/edit-obj.component';
import { NewObjComponent } from './new-obj/new-obj.component';
import { ShowObjComponent } from './show-obj/show-obj.component';
import { ReviewObjComponent } from './review-obj/review-obj.component';
import { ShowAllObjsComponent } from './show-all-objs/show-all-objs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
    EditObjComponent,
    NewObjComponent,
    ShowObjComponent,
    ReviewObjComponent,
    ShowAllObjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
