import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
})
export class LivestreamPageComponent {
  title = 'TextConvertor';
  @ViewChild('textArea') iframe: ElementRef;

  private addToIframe(){
    this.iframe.nativeElement.contentWindow.frames.document.body.insertAdjacentHTML('beforebegin', 'fuck');
  }
}
