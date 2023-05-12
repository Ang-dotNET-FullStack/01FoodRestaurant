import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import FoodType from 'src/app/Models/FoodType.model';
import { Router } from '@angular/router';
import { FoodTypeService } from '../food-type.service';

@Component({
  selector: 'app-create-food-type',
  templateUrl: './create-food-type.component.html',
  styleUrls: ['./create-food-type.component.css']
})
export class CreateFoodTypeComponent implements OnInit {

  foodType: FoodType;

  constructor
  (
    private foodTypeService: FoodTypeService,
    private route: Router
  )
  {
    this.foodType=new FoodType(0,"");
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.foodTypeService.createFoodType(this.foodType).subscribe(res=>{
      console.log("Food Type created successfully!");
      this.route.navigate(['foodType']);
    },(err) =>{
      console.log(err);
    });
  }
}
