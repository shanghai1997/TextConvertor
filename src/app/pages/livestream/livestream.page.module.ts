import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LivestreamPageComponent } from "./livestream.page";

const routes: Routes = [
  {
    path: '',
    component: LivestreamPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  entryComponents: [],
  declarations: [
    LivestreamPageComponent
  ]
})
export class LivestreamPageModule { }
