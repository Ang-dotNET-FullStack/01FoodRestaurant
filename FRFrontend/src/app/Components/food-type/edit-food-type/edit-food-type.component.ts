import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import FoodType from 'src/app/Model/FoodType.model';
import { FoodTypeApiService } from 'src/app/services/API/food-type-api.service';
import { FoodTypeService } from '../food-type.service';

@Component({
  selector: 'app-edit-food-type',
  templateUrl: './edit-food-type.component.html',
  styleUrls: ['./edit-food-type.component.css']
})
export class EditFoodTypeComponent implements OnInit {

  foodType: FoodType;

  constructor
  (
    private foodTypeApiService: FoodTypeApiService,
    private foodTypeService: FoodTypeService,
    private route: Router
  )
  {
    this.foodType = this.foodTypeService.foodType;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.foodTypeApiService.updateFoodType(this.foodType.id, this.foodType).subscribe(
      res=>{        
        this.route.navigate(['foodType']);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
