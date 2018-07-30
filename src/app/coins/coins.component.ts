import { Component, OnInit, NgModule } from '@angular/core';

import { RanksComponent } from '../ranks/ranks.component';
import { TrendsComponent } from '../trends/trends.component';



@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
