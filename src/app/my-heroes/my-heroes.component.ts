import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Hero, HEROES } from '../hero';
import { HeroesComponent } from '../hero-details/hero-details.component';
import { TopHeroesComponent } from '../top-heroes/top-heroes.component';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit, OnChanges {

  public selectedHero? : Hero;
  public title : string = "My Heroes";
  public listaHeroes : Hero[] = HEROES;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges PADRE");
  }

  ngOnInit(): void {
    console.log("OnInit PADRE");
  }

  
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
