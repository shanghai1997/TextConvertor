import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {RestClientService} from "../../services/restClient.service";

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.scss']
})
export class LivestreamPageComponent implements OnInit{
  title = 'TextConvertor';
  @ViewChild('textArea', { static: true }) iframe: ElementRef;
  textSubject: Subject<string> = new Subject<string>();
  array: string[] = [];

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit() {
    let sub: Subscription = this.textSubject
      .subscribe(async (i) => {
      let token: string = await this.restClientService.getToken();
      if (token) {
        this.restClientService.getAudio(token, i);
      }
    })
    this.iframe.nativeElement.style.display = "none";
  }

  addToIframe(text: string){
    this.iframe.nativeElement.contentWindow.frames.document.body.insertAdjacentHTML('beforebegin', text+'\n');
    this.textSubject.next(text);
  }

  revertVisibility() {
    this.iframe.nativeElement.style.display !== "none" ?
      this.iframe.nativeElement.style.display = "none" : this.iframe.nativeElement.style.display = "";
  }
}
