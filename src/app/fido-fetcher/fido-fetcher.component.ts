import { Component, OnInit } from '@angular/core';
import { FidoService } from '../fido.service';

@Component({
  selector: 'app-fido-fetcher',
  templateUrl: './fido-fetcher.component.html',
  styleUrls: ['./fido-fetcher.component.css']
})
export class FidoFetcherComponent implements OnInit {
  picUrl = '';

  fidoService: FidoService;
  subscription;

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  getNewPic(){
    this.fidoService.fetchNewFidoPic();
  }

  ngOnInit(){
    this.fidoService.fetchNewFidoPic();
    this.subscription = this.fidoService.urlChanged.subscribe(
      ()=> {
        this.picUrl = this.fidoService.currentUrl;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
