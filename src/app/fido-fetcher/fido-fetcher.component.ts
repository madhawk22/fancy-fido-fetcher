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

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  ngOnInit(): void {
  }

  getNewPic(){
    this.picUrl = '';
  }
}
