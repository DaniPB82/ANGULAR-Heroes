import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {

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

  public h5 : Hero = {
    id: 2,
    name: "Narco"
  }

  public h6 : Hero = {
    id: 3,
    name: "Bombasto"
  }

  public h7 : Hero = {
    id: 4,
    name: "Celeritas"
  }

  public h8 : Hero = {
    id: 5,
    name: "Magneta"
  }

  public h9 : Hero = {
    id: 2,
    name: "Narco"
  }

  public h10 : Hero = {
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
