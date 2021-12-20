import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.css']
})
export class LivestreamPageComponent implements OnInit{
  title = 'TextConvertor';
  @ViewChild('textArea', { static: true }) iframe: ElementRef;
  textSubject: Subject<String> = new Subject<String>();
  array: string[] = [];

  constructor() {
  }

  ngOnInit() {
    let sub: Subscription = this.textSubject
      .subscribe((i) => {
      console.log(i);
    })
  }

  addToIframe(text: string){
    this.iframe.nativeElement.contentWindow.frames.document.body.insertAdjacentHTML('beforebegin', text+'\n');
    this.textSubject.next(text);
    this.array.push(text);
  }
}
