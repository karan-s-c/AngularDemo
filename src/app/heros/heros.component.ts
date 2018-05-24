import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  // selectedHero: Hero;

  // onSelect(hero:Hero) : void 
  // {
  //   this.selectedHero = hero;
  // }

  heros : Hero[];

  getHeros() : void
  {
    //this.heros = this.heroService.getHeros();

    this.heroService.getHeros()
    .subscribe(heros => this.heros = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeros();
  }

}
