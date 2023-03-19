import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Heros} from "./mock-heros";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes() : Observable<Hero[]> {

    const heroes = of(Heros)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
 }
}
