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

      xit('should successfully get all cars', (done) => {
        carService.getCars()
                       .subscribe(res => {
                         expect(res.length).toEqual(3);
                         expect(res).toEqual(carsMock);
                         done();
                         
                       });
    
        let req1 = httpMock.expectOne(`${environment.apiEndPoint}/vehicles/`);
        expect(req1.request.method).toEqual('GET');
        req1.flush(carsMock);

        let req2 = httpMock.expectOne(`${environment.apiEndPoint}/vehicles/`);
        expect(req2.request.method).toEqual('GET');
        req2.flush(carsMock);

        let req3 = httpMock.expectOne(`${environment.apiEndPoint}/vehicles/`);
        expect(req3.request.method).toEqual('GET');
        req3.flush(carsMock);
      });

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