import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  title = 'TextConvertor';
  hide = false;

  constructor(private router: Router){
  }

  navigatePage():void {
    this.router.navigate(['/livestream']).then(() => console.log('triggered')).catch(err => console.log(err))
  }
}
