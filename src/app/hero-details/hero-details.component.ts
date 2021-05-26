import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: "Windstorm"
  };

  public botonBack : string = "Back";

  constructor() {
    console.log("Texto de prueba");
   }

  ngOnInit(): void {
    
    
  }

}
