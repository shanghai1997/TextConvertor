import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {RestClientService} from "../../services/restClient.service";

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.page.html',
  styleUrls: ['./livestream.page.css']
})
export class LivestreamPageComponent implements OnInit, AfterViewInit{
  title = 'TextConvertor';
  @ViewChild('textArea', { static: true }) iframe: ElementRef;
  textSubject: Subject<String> = new Subject<String>();
  array: string[] = [];

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit() {
    let sub: Subscription = this.textSubject
      .subscribe((i) => {
      console.log(i);
    })
    this.iframe.nativeElement.style.display = "none";
  }

  ngAfterViewInit() {
    this.restClientService.getToken();
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
