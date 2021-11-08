import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  heroes: any = [];

  constructor(
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.heroesService.index().then(response => {
      this.heroes = response;
    })
  }

  doRefresh(event) {
    this.heroesService.index().then(response => {
      this.heroes = response;
    }).finally(() => event.target.complete());
  }
}
