import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { take } from 'rxjs/operators';

import { CarService } from 'src/app/core/car.service';
import { ICar } from '../shared/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() carList: ICar[] = [];
  @Output() carEventClick : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){

  }

  propagate(modelId: string) {
      this.carEventClick.emit(modelId);
  }

  // backToList() {
  //   this.listModeEvent.emit(false);
  // }

}
