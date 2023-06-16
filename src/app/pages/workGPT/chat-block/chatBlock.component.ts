import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, interval, map, mergeMap, timer} from "rxjs";

@Component({
  selector: 'app-chat-block',
  templateUrl: './chatBlock.component.html',
  styleUrls: ['./chatBlock.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChatBlockComponent implements OnInit, OnDestroy {
  @Input() text: string
  loadingBehaviorSubj = new BehaviorSubject(true)

  constructor(
  ) {
  }

  ngOnInit() {
    timer(3000).pipe(map(_ => this.loadingBehaviorSubj.next(false)))
  }

  ngOnDestroy() {
  }

  getLoadingObservable(){
    const obs = new BehaviorSubject(true);
    setTimeout(() => {obs.next(false)}, 3000);
    return obs;
  }
}
