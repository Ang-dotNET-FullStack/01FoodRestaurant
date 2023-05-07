import { Component, OnInit } from '@angular/core';
import FoodType from 'src/app/Model/FoodType.model';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {

  foodType : FoodType;
  public foodTypes: any;

  constructor() 
  {
    this.foodType = new FoodType(0, "");
  }

  ngOnInit(): void {
  }

}
