import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ICar } from '../shared/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnChanges {

  @Input() car: ICar = {id: '', modelYear: '', url: '', media: [{url:'', name:''}], carDetail: null};

  image: string = '';
  title: string = '';
  price: string = '';
  description: string = '';
  modelId: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
      this.modelId = this.car.id;
      this.image = this.car.media[0].url;
      this.title = `${this.car.media[0].name} ${this.car.modelYear}`;
      this.price = `From ${this.car.carDetail.price}`;
      this.description = this.car.carDetail.description;
    }

 }
