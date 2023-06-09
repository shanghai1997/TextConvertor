import { WorkGPTRoutingModule } from "./workGPT-routing.moudle";
import { IonicModule } from "@ionic/angular";
import { WorkGPTPage } from "./workGPT.page";
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    WorkGPTPage
  ],
  imports: [
    IonicModule,
    WorkGPTRoutingModule,
    CommonModule,
  ]
})
export class WorkGPTModule { }
