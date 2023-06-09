import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-work-gpt',
  templateUrl: './workGPT.page.html',
  styleUrls: ['./workGPT.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WorkGPTPage implements OnInit, OnDestroy {

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getUerInputText(text: any){
    console.log(text)
  }
}
