import { Component, OnInit } from '@angular/core';
import { FidoService } from '../fido.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fidos = [];

  fidoService: FidoService;

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  ngOnInit(){
    this.fidos = this.fidoService.getFidos();
  }

}
