import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {RestClientService} from "../../services/restClient.service";

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

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit() {
    let sub: Subscription = this.textSubject
      .subscribe(async (i) => {
      let token: any = await this.restClientService.getToken();
      if (token) {
        this.restClientService.getAudio(token);
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
