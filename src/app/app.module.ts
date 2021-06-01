import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero-details/hero-details.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CabeceraComponent,
    TopHeroesComponent,
    MyHeroesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
