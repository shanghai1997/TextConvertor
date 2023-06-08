import { WorkGPTRoutingModule } from "./workGPT-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { WorkGPTPage } from "./workGPT.page";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    WorkGPTPage
  ],
  imports: [
    IonicModule,
    WorkGPTRoutingModule,
  ]
})
export class WorkGPTModule { }
