import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private heroesService: HeroesService,
  ) {}

   ngOnInit() {
     setTimeout(() => {
       this.storage.get('heroes').then(response => {
         for(let heroe of response) {
           this.heroesService.create(heroe);
         }
       })
     }, 3000);
   }
}
