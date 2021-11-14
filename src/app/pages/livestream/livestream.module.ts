import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {livestreamPageComponent} from "./livestream.page";

const routes: Routes = [
  {
    path: '',
    component:livestreamPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [],
  declarations: [livestreamPageComponent]
})
export class LivestreamPageModule {

}
