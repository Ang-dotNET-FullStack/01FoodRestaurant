import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';

const routes: Routes = [  
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:'createCategory',
    component: CreateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
