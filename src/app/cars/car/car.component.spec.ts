import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';
import { carsMock } from 'src/app/fixtures';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data', async(()=>{
    component.car = carsMock[0];
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.title).toBe('vehicle k17');
    expect(component.price).toBe('From £30,000');
    expect(component.image).toBe('/images/xe_k17.jpg');
    expect(component.description).toBe('The most advanced, efficient and refined sports saloon that Jaguar has ever produced');
  }))
});
