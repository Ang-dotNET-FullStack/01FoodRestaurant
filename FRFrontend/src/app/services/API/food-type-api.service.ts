import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import FoodType from 'src/app/Model/FoodType.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodTypeApiService {

  url:string ="FoodType";

  constructor(private apiBaseService:ApiBaseService) { }  

  getAllFoodTypes(): Observable<FoodType>{
    return this.apiBaseService.getAll(this.url);
  }

  createFoodType<FoodType>(foodType: FoodType): Observable<FoodType>{    
    return this.apiBaseService.create(this.url, foodType);
  } 

  updateFoodType<FoodType>(id: number, foodType: FoodType): Observable<FoodType>{
    return this.apiBaseService.update(this.url, id, foodType);
  }

  deleteFoodType(id: number): Observable<any>{
    return this.apiBaseService.delete(this.url, id);
  }
}
