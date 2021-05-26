import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {

  public title : string = "Top Heroes";

  public h1 : Hero = {
    id: 2,
    name: "Narco"
  }

  public h2 : Hero = {
    id: 3,
    name: "Bombasto"
  }

  public h3 : Hero = {
    id: 4,
    name: "Celeritas"
  }

  public h4 : Hero = {
    id: 5,
    name: "Magneta"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
