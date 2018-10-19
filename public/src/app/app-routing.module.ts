import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllObjsComponent } from './show-all-objs/show-all-objs.component';
import { NewObjComponent } from './new-obj/new-obj.component';
import { ShowObjComponent } from './show-obj/show-obj.component';
import { ReviewObjComponent } from './review-obj/review-obj.component';
import { EditObjComponent } from './edit-obj/edit-obj.component';

const routes: Routes = [
  { path: 'restaurants', component: ShowAllObjsComponent, children: [
    { path: ':id/edit', component: EditObjComponent}
  ] },
  { path: 'restaurants/new', component: NewObjComponent },
  { path: 'restaurants/:id', component: ShowObjComponent },
  { path: 'restaurants/:id/review', component: ReviewObjComponent },
  { path: '**', redirectTo: '/restaurants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
