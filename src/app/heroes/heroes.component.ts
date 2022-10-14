import { HEROES } from './../mock-heroes';
import { Hero } from './../hero.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Wolverine'
  };

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;

  selectHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

}


