import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivestreamPageComponent } from "./pages/livestream/livestream.page";
import { HomePage } from "./pages/home/home.page";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full'
  },
  {path: 'livestream', component: LivestreamPageComponent},
  {path: 'workGPT', loadChildren: () => import('./pages/workGPT/workGPT.module').then(m => m.WorkGPTModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
