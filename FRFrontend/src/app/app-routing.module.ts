import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category/category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
