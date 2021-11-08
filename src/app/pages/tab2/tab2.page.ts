import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CategoryService } from 'src/app/services/category.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dataCategory: any = [];
  
  name: string;
  category: any;
  isActive: boolean = false;
  
  constructor(
    private categoryService: CategoryService,
    private heroesService: HeroesService,
    private loadController: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
  ) {}

  ngOnInit() {
    console.log(this.category);
      this.categoryService.index().then(response => {
        this.dataCategory = response;
      })
  }

  async add() {
    const load = await this.loadController.create({message: 'Loading...'})
    load.present();

    if(this.name && this.category) {
      this.storage.get('heroes').then((response: any) => {
        if(!response) {
          this.storage.set('heroes', [{
            Name: this.name,
            CategoryId: this.category.id,
            Active: this.isActive
          }]).finally(() => {
            this.loadController.dismiss();
            this.name = undefined;
            this.category = undefined;
            this.category = false;
    
            this.alertController.create({
              header: 'Warning',
              message: 'Success.',
              buttons: ['Ok']
            }).then(alert => alert.present())
          })
        } else {
          response.push({
            Name: this.name,
            CategoryId: this.category.id,
            Active: this.isActive
          });
          this.storage.set('heroes', response).finally(() => {
            this.loadController.dismiss();
            this.name = undefined;
            this.category = undefined;
            this.category = false;
    
            this.alertController.create({
              header: 'Warning',
              message: 'Success.',
              buttons: ['Ok']
            }).then(alert => alert.present())
          })
        }
      })
    } else {
      load.dismiss();
      
      this.alertController.create({
        header: 'Warning',
        message: 'Fill in all fields to save.',
        buttons: ['Ok']
      }).then(alert => alert.present())
    }
  }
}
