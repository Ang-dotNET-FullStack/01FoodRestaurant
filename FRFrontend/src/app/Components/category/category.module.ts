import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CategoryModule { }
