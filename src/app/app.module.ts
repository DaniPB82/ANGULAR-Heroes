import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero-details/hero-details.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CabeceraComponent,
    TopHeroesComponent,
    MyHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
