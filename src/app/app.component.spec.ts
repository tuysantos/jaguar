import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of as ObservableOf } from 'rxjs';

import { AppComponent } from './app.component';
import { CarComponent } from './cars/car/car.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarService } from './core/car.service';
import { ICar } from './cars/shared/car.model';
import { carsMock } from './fixtures';

class CarServiceMock {
  getCars(): Observable<ICar[]> {
    return ObservableOf(carsMock);
  }
}

describe('AppComponent', () => {
  let carService: CarService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CommonModule
      ],
      declarations: [
        AppComponent,
        CarComponent,
        CarListComponent
      ],
      providers: [
        {provide: CarService, useClass : CarServiceMock}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    carService = TestBed.get(CarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Jaguar Car List'`, () => {
    expect(component.title).toEqual('Jaguar Car List');
  });

  it('should return a list of cars with details', ()=>{
    expect(component.cars.length).toBe(3);
    expect(component.cars[0].carDetail).toBeNull;
    expect(component.cars[0].id).toEqual(component.cars[0].carDetail.id);
  });

  it('should call the service', ()=>{
    spyOn(carService, 'getCars').and.returnValue(ObservableOf(carsMock));
    component.loadCars();
    fixture.detectChanges();
    expect(carService.getCars).toHaveBeenCalled();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Jaguar Car List!');
  });
});
