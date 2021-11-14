import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {livestreamPageComponent} from "./pages/livestream/livestream.page";

const routes: Routes = [
  {path: 'livestream',
    loadChildren: () => import('./pages/livestream/livestream.module').then(mod => mod.LivestreamPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
