import { Subject } from 'rxjs';

export class FidoService {

  fidos = [
    { name: 'Lady', age: 26, profession: 'heiress', hometown: 'London, England', likes: 'pearl necklaces and dry martinis with 3 olives', dislikes: 'dirt', pic: 'https://images.dog.ceo/breeds/papillon/n02086910_7280.jpg'},
    { name: 'Tramp', age: 28, profession: 'scoundrel', hometown: 'Chicago, USA', likes: 'dumpster diving, leftover pizza, and heiresses', dislikes: 'suits and ties', pic: 'https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg'},
    { name: 'Biff Jr', age: 23, profession: 'jock', hometown: 'Beaver, OH', likes: 'himself, winning, money, hot chicks', dislikes: 'school, rooms without mirrors', pic: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3.jpg'},

  ];

  fidosChanged = new Subject<void>();

  constructor() {}

  getFidos(){
    console.log(this.fidos);
    return this.fidos.slice();
  }

  addFido(name, age, profession, hometown, likes, dislikes, pic){
    const newFido = { name: name, age: age, profession: profession, hometown: hometown, likes: likes, dislikes: dislikes, pic: pic};
    this.fidos.push(newFido);
    this.fidosChanged.next();
  }
}
