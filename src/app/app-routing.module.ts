import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { HeroesComponent } from './hero-details/hero-details.component';

const routes : Routes = [
  { path: "my-heroes", component: MyHeroesComponent, pathMatch: "full" },
  { path: "top-heroes", component: TopHeroesComponent, pathMatch: "full" },
  { path: "hero-details/:id", component: HeroesComponent, pathMatch: "full" },
  { path: "", redirectTo: "top-heroes", pathMatch: "full" },
  { path: "**", redirectTo: "top-heroes" }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
