import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkGPTPage } from "./workGPT.page";

const routes: Routes = [
  {
    path: '',
    component: WorkGPTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkGPTRoutingModule {
}
