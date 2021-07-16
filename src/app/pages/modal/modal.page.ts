import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() text: string;
inputText: string;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
dismiss(){
  this.modalCtrl.dismiss({inputText:this.inputText});
}
}
