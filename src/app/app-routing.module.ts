import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestreamPageComponent } from "./pages/livestream/livestream.page";
import {HomePage} from "./pages/home/home.page";

const routes: Routes = [
  {path: 'livestream', component: LivestreamPageComponent},
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
