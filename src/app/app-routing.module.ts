import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestreamPageComponent } from "./pages/livestream/livestream.page";

const routes: Routes = [
  {path: 'livestream', component: LivestreamPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
