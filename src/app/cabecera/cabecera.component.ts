import { Component, OnInit } from '@angular/core';

import { MyHeroesComponent } from '../my-heroes/my-heroes.component';
import { TopHeroesComponent } from '../top-heroes/top-heroes.component';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public title : string = "Tour of Heroes";
  public boton1 : string = "Dashboard";
  public boton2 : string = "Heroes";

  constructor() { }

  ngOnInit(): void {
  }

}
