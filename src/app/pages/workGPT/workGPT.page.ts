import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, timer} from "rxjs";

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
    const obs = new BehaviorSubject(true);
    setTimeout(() => {obs.next(false)}, 3000);
    return obs;
  }
}
