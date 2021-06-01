import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero, HEROES } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService : MessageService) { }

  getHeroes1() : Hero[] {
    this.messageService.add("Lista de Heroes introducida en el array1");
    return HEROES;
  }

  getHeroes2() : Observable<Hero[]> {
    const todosLosHeroes = of(HEROES);
    this.messageService.add("Lista de Heroes introducida en el array2");
    return todosLosHeroes;
  }

}

