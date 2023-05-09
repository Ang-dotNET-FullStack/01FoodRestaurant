import { Component, OnInit } from '@angular/core';
import FoodType from 'src/app/Models/FoodType.model';
import { FoodTypeService } from '../food-type.service';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {

  foodType : FoodType;
  public foodTypes: any;

  constructor(public foodTypeService: FoodTypeService) 
  {
    this.foodType = new FoodType(0, "");
  }

  ngOnInit(): void {
    this.loadAllFoodTypes();
  }

  loadAllFoodTypes(){
    this.foodTypeService.getFoodTypes().subscribe(res =>{
      this.foodTypes = res;
    },
    (err)=>{
      console.log(err);
    });
  }

  onDelete(id: number){
    this.foodTypeService.deleteCatgory(id).subscribe(res=>{
      this.foodTypeService.reloadPage();
    },(err)=>{
      console.log(err);
    })
  }
}
