import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
})
export class LivestreamPageComponent {
  title = 'TextConvertor';
  @ViewChild('textArea') iframe: ElementRef
}
