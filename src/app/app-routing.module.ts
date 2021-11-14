import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {livestreamPageComponent} from "./pages/livestream/livestream.page";

const routes: Routes = [
  {path: 'livestream', component: livestreamPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
