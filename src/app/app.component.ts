import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { CarService } from './core/car.service';
import { ICar, ICarDetail } from './cars/shared/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jaguar Car List';

  detailMode: boolean = false;
  cars: ICar[] = [];
  carDetail: ICarDetail;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loadCars()
  }

  setMode(mode: boolean): void {
      this.detailMode = mode;
  }

  loadCars() {
    this.carService.getCars()
        .pipe(take(1))
        .subscribe((res: ICar[]) => {
          console.log("res", res)
            this.cars = res;
        },
        (err: any) => console.log(err),
        () => console.log('getCars() retrieved cars'));
  }
}
