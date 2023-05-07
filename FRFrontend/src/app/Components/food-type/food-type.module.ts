import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodTypeComponent } from './food-type/food-type.component';
import { CreateFoodTypeComponent } from './create-food-type/create-food-type.component';
import { EditFoodTypeComponent } from './edit-food-type/edit-food-type.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FoodTypeComponent,
    CreateFoodTypeComponent,
    EditFoodTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FoodTypeModule { }
