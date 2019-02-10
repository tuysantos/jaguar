import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of as ObservableOf, forkJoin } from 'rxjs';
import { map, catchError, mergeMap, flatMap, concatMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ICar, ICarDetail } from '../cars/shared/car.model';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    constructor(private http: HttpClient){}

    getCars(): Observable<ICar[]> {
        return this.http.get<ICar[]>(`${environment.apiEndPoint}/vehicles/`)
        .pipe(
            map((cars : ICar[]) => {
                return cars;
            }),
            catchError(this.handleError)
        ).pipe(
            flatMap((cars: ICar[]) => {
                return forkJoin(
                    cars.map((car: ICar) => {
                        return this.getCarModel(car.id).pipe(
                            map((carDetail: ICarDetail) => {
                                let cardetail: ICarDetail = carDetail;
                                car.carDetail = cardetail;
                                return car;
                            })
                        )
                    })
                )
            })
        )
    }

    getCarModel(modelId: string): Observable<ICarDetail> {
        return this.http.get<ICarDetail>(`${environment.apiEndPoint}/vehicle/${modelId}`)
        .pipe(
            map((car: ICarDetail) => {
                return car;
            }),
            catchError(this.handleError)
        );

    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
        }
        return Observable.throw(error);
    }
}