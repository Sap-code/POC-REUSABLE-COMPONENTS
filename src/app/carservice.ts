import { Injectable } from '@angular/core';
import { Car } from './car';
import { Model } from './model';
import { Observable, of } from 'rxjs';
import {catchError, tap, delay, map} from 'rxjs/operators';

@Injectable()
export class CarService {

  getCars(): Observable<Car[]> {
    return of(cars).pipe(
      map(c => {
        const filteredCars: Car[] = cars;
        return filteredCars;
      })
    );
  }  

  getModels(carName): Observable<any[]> {
    return of(cars).pipe(
      map(c => {   
        if(carName){
          let v1 = cars.find(y=>y.name == carName).models;
          return v1;
        }  
      })
    );
  }
}


export const cars: Car[] = [
  {  id: 1, name: 'Audi', 
     models:[ 
              {  id: 1, carid: 1, name: 'A4'},
              {  id: 2, carid: 1, name: 'A5'},
              {  id: 3, carid: 1, name: 'Q5'},
              {  id: 4, carid: 1, name: 'Q7'},
            ]
  },
  {
    id: 2, name: 'BMW', 
     models:[ 
              {  id: 5, carid: 2, name: 'D 60'},
              {  id: 6, carid: 2, name: 'GLS 30'},
            ]
  },
  {
    id: 3, name: 'Honda', 
     models:[ 
              {  id: 7, carid: 3, name: 'Accord'},
              {  id: 8, carid: 3, name: 'Civic'},
              {  id: 9, carid: 3, name: 'City'}
            ]
  },
  {
    id: 4, name: 'Ford', 
     models:[ 
              {  id: 10, carid: 4, name: 'EcoSports'},
            ]
  },
  {
    id: 5, name: 'Mazda', 
     models:[ 
              {  id: 11, carid: 5, name: 'Figo'},
              {  id: 12, carid: 5, name: 'MUSTANG'}
            ]
  }
  ];