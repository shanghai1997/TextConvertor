import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TextConvertor';
  hide = false;

  constructor(private router: Router){
  }

  hidePage():void {
    this.hide = true;
  }

  headToLiveStream() {
    this.router.navigate(['livestream']).catch(() => {console.log('fail to navigate')})
  }
}
