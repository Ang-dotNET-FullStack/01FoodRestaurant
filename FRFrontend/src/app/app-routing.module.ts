import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { FoodTypeComponent } from './components/food-type/food-type/food-type.component';
import { CreateFoodTypeComponent } from './components/food-type/create-food-type/create-food-type.component';
import { EditFoodTypeComponent } from './components/food-type/edit-food-type/edit-food-type.component';
import { MenuItemComponent } from './components/menu-item/menu-item/menu-item.component';
import { CreateMenuItemComponent } from './components/menu-item/create-menu-item/create-menu-item.component';
import { EditMenuItemComponent } from './components/menu-item/edit-menu-item/edit-menu-item.component';

const routes: Routes = [  
  {
    path:"",
    component: MenuItemComponent
  },
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
  },
  {
    path:'menuItem',
    component: MenuItemComponent
  },
  {
    path:'createMenuItem',
    component: CreateMenuItemComponent
  },
  {
    path:'editMenuItem',
    component:EditMenuItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
