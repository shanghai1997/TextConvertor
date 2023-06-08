import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { LivestreamPageComponent } from "./pages/livestream/livestream.page";
import { RestClientService } from "./services/restClient.service";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./pages/home/home.page";
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    LivestreamPageComponent,
    HomePage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  providers: [
    RestClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
