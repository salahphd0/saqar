import { DataService } from './../../services/data/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
  async showModal(){
    const modal=await this.modalCtrl.create({
      component: ModalPage,
            componentProps:{
        text: 'It\'s an awsome tutorial'
      }

    });
    await modal.present();
    const res=await modal.onDidDismiss();
  }
detail(id){
  this.dataService.setParams({id});
  this.navCtrl.navigateForward('/second-page');
}

}
