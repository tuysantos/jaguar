import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarService } from './car.service';
import { carsMock } from '../fixtures';
import { environment } from 'src/environments/environment';

describe('Car Service', ()=>{
    let carService: CarService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [CarService],
          imports: [
            HttpClientTestingModule
          ],
        });

        carService = TestBed.get(CarService);
        httpMock = TestBed.get(HttpTestingController);
      });

      afterEach(() => {
        httpMock.verify();
      });

    it('should successfully get all cars',
        inject([HttpTestingController, CarService],
            (httpMock: HttpTestingController, service: CarService) => {
                service.getCars().subscribe(res => {
                    expect(res.length).toEqual(3);
                    expect(res).toEqual(carsMock); 
                });

            const req = httpMock.expectOne(`${environment.apiEndPoint}/vehicles/`);
            expect(req.request.method).toEqual('GET');
            req.flush(carsMock);
            const req1 = httpMock.expectOne(`${environment.apiEndPoint}/vehicle/xe`);
            const req2 = httpMock.expectOne(`${environment.apiEndPoint}/vehicle/xf`);
            const req3 = httpMock.expectOne(`${environment.apiEndPoint}/vehicle/xj`);
            
            expect(req1.request.method).toEqual('GET');
            expect(req2.request.method).toEqual('GET');
            expect(req3.request.method).toEqual('GET');
            
            req1.flush(carsMock[0].carDetail);
            req2.flush(carsMock[1].carDetail);
            req3.flush(carsMock[2].carDetail);
            })
    );

    it('should successfully get car model',
        inject([HttpTestingController, CarService],
            (httpMock: HttpTestingController, service: CarService) => {
                let modelId = 'xe';
                service.getCarModel(modelId).subscribe(data => {
                    expect(data.id).toEqual('xe');
                    expect(data.price).toEqual('£30,000');
                });

            const req = httpMock.expectOne(`${environment.apiEndPoint}/vehicle/xe`);
            expect(req.request.method).toEqual('GET');
            req.flush(carsMock[0].carDetail);
            })
    );
});