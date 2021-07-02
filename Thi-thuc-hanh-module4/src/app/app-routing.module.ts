import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReadedComponent} from "./read/readed/readed.component";
import {ReadingComponent} from "./read/reading/reading.component";

const routes: Routes = [
  {
    path: 'read/readed',
    component: ReadedComponent
  },
  {
    path: 'read/reading',
    component: ReadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
