import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RestClientService } from "./services/restClient.service";
import { LivestreamPageModule } from "./pages/livestream/livestream.page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LivestreamPageModule
  ],
  providers: [
    RestClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
