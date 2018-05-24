import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros : Hero[] = [];

  constructor(private heroService:HeroService) { }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heros = heroes.slice(1, 5));
  }

  ngOnInit() {
    this.getHeros();
  }

}
