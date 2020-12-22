import { Component, OnInit } from '@angular/core';
import { FidoService } from '../fido.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fidos = [
    { name: 'Lady', age: 26, profession: 'heiress', hometown: 'London, England', likes: 'pearl necklaces and dry martinis with 3 olives', dislikes: 'dirt', pic: 'https://images.dog.ceo/breeds/papillon/n02086910_7280.jpg'},
    { name: 'Tramp', age: 28, profession: 'scoundrel', hometown: 'Chicago, USA', likes: 'dumpster diving, leftover pizza, and heiresses', dislikes: 'suits and ties', pic: 'https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg'},
    { name: 'Biff Jr', age: 23, profession: 'jock', hometown: 'Beaver, OH', likes: 'himself, winning, money, hot chicks', dislikes: 'school, rooms without mirrors', pic: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3.jpg'},

  ];

  fidoService: FidoService;

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  ngOnInit(): void {
  }

}
