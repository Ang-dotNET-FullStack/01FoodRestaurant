import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [
    CreateCategoryComponent,
    CategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
