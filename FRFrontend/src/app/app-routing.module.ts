import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { FoodTypeComponent } from './components/food-type/food-type/food-type.component';
import { CreateFoodTypeComponent } from './components/food-type/create-food-type/create-food-type.component';
import { EditFoodTypeComponent } from './components/food-type/edit-food-type/edit-food-type.component';

const routes: Routes = [  
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:'createCategory',
    component: CreateCategoryComponent
  },
  {
    path:'editCategory',
    component:EditCategoryComponent
  },
  {
    path:'foodType',
    component: FoodTypeComponent
  },
  {
    path:'createFoodType',
    component: CreateFoodTypeComponent
  },
  {
    path:'editFoodType',
    component:EditFoodTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
