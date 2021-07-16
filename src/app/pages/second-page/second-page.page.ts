import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
productId: string;
  constructor(
    private dataService: DataService

  ) { }

  ngOnInit() {
    this.getProductId();
  }
  getProductId(){
    this.productId=this.dataService.getParams().id;
  };
}
