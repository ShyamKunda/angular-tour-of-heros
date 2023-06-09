import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {Heros} from "../mock-heros";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit{

  heroes: Hero[] =[];
  selectedHero?:Hero;

  constructor(private heroService: HeroService, private  messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }



  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  onSelect(hero : Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }




}
