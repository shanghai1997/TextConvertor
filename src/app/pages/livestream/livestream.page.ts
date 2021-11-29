import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.css']
})
export class LivestreamPageComponent {
  title = 'TextConvertor';
  @ViewChild('textArea', { static: true }) iframe: ElementRef;

  constructor() {
  }

  addToIframe(){
    this.iframe.nativeElement.contentWindow.frames.document.body.insertAdjacentHTML('beforebegin', 'fuck');
  }
}
