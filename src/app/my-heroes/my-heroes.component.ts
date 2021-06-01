import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Hero, HEROES } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from '../hero-details/hero-details.component';
import { TopHeroesComponent } from '../top-heroes/top-heroes.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit, OnChanges {

  public selectedHero? : Hero;
  public title : string = "My Heroes";
  public listaHeroes : Hero[] = [];

  constructor(private heroService : HeroService, private messageService : MessageService) { }

  getHeroes1() : void {
    this.listaHeroes = this.heroService.getHeroes1();
  }

  getHeroes2() : void {
    this.heroService.getHeroes2().subscribe(heroes => this.listaHeroes = heroes);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges PADRE");
  }

  ngOnInit(): void {
    this.getHeroes1();
    console.log(this.listaHeroes);
    this.getHeroes2();
    console.log(this.listaHeroes);
  }

  
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
    this.messageService.add("Id: " + this.selectedHero.id + ", Name: " + this.selectedHero.name);
    this.messageService.add(`Héroe seleccionado: ${this.selectedHero.id}`);
    this.messageService.add(`Héroe seleccionado: ${hero.id}`);
    console.log(this.selectedHero);
  }

}
