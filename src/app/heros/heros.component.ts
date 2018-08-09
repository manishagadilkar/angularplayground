import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mockheroes';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  //hero="Sandy"
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero:Hero): void
  {
    this.selectedHero=hero;
  }
 
  // hero: Hero={
  //   Id: 1,
  //   name: 'Sandy'

  // };
  constructor() { }

  ngOnInit() {
  }

}
