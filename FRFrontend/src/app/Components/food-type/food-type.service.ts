import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import FoodType from 'src/app/Model/FoodType.model';
import { FoodTypeApiService } from 'src/app/services/API/food-type-api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {

  foodType: FoodType;

  constructor
  (
    private foodTypeApiService:FoodTypeApiService,
    private router: Router
  )
  {
    this.foodType = new FoodType(0, "");
  }

  public getFoodTypes(){
    return this.foodTypeApiService.getAllFoodTypes();
  }

  public createFoodType(foodType: FoodType){
    return this.foodTypeApiService.createFoodType(foodType);
  }

  public updateFoodType(id: number, foodType: FoodType){
    return this.foodTypeApiService.updateFoodType(id, foodType);
  }
  public deleteCatgory(id: number){
    return this.foodTypeApiService.deleteFoodType(id);
  }

  public reloadPage(){
    window.location.reload();
  }

  public loadData(foodType: FoodType){
    this.foodType.id=foodType.id;
    this.foodType.name=foodType.name;
    this.router.navigate(['editFoodType']);
  }

}
