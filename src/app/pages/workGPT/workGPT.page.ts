import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, map, timer} from "rxjs";

@Component({
  selector: 'app-work-gpt',
  templateUrl: './workGPT.page.html',
  styleUrls: ['./workGPT.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WorkGPTPage implements OnInit, OnDestroy {
  textList: any[] = [];

  constructor(
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getUerInputText(text: any){
    this.textList.push(text);
  }

  getLoadingObservable(){
     return new BehaviorSubject(true).pipe(map(value => timer(3000)))
  }
}
