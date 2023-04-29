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

  navigatePage():void {
    this.router.navigate(['/livestream']).then(() => console.log('triggered')).catch(err => console.log(err))
  }
}
