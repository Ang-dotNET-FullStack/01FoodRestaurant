import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { FoodTypeComponent } from './components/food-type/food-type/food-type.component';
import { CreateFoodTypeComponent } from './components/food-type/create-food-type/create-food-type.component';
import { EditFoodTypeComponent } from './components/food-type/edit-food-type/edit-food-type.component';
import { MenuItemComponent } from './components/menu-item/menu-item/menu-item.component';
import { UpsertMenuItemComponent } from './components/menu-item/upsert-menu-item/upsert-menu-item.component';

const routes: Routes = [  
  // {
  //   path:"",
  //   component: MenuItemComponent
  // },
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
    path:'upsertMenuItem',
    component: UpsertMenuItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
