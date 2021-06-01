import { DoCheck, SimpleChanges } from '@angular/core';
import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';

import { Hero } from '../hero';
import { MyHeroesComponent } from '../my-heroes/my-heroes.component';
import { TopHeroesComponent } from '../top-heroes/top-heroes.component';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, DoCheck {

  @Input() hero? : Hero;

  /*hero : Hero = {
    id: 1,
    name: "Windstorm"
  };*/

  public botonBack : string = "Back";

  constructor() {
    console.log("Constructor HIJO");
  }

  ngDoCheck(): void {
    console.log("DoCheck HIJO");
  }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges HIJO");
  }

  ngOnInit(): void {
    console.log("OnInit HIJO");
  }

}
