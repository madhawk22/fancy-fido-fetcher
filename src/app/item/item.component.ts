import { Component, Input, OnInit } from '@angular/core';
import { FidoService } from '../fido.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() fido;
  fidoService: FidoService;

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  ngOnInit(): void {
  }

}
