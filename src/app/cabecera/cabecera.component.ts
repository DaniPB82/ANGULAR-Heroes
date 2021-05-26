import { Component, OnInit } from '@angular/core';

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
