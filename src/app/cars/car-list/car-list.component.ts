import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { ICar } from '../shared/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() carList: ICar[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){

  }

}
