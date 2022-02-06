import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { LivestreamPageComponent } from "./pages/livestream/livestream.page";
import { RestClientService } from "./services/restClient.service";

@NgModule({
  declarations: [
    AppComponent,
    LivestreamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RestClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
