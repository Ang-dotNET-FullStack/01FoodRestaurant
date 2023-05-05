import { Injectable } from '@angular/core';
import Category from 'src/app/Model/Category.model';
import { CategoryApiService } from 'src/app/services/API/category-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private categoryApiService:CategoryApiService) { }

  public getCategories(){
    return this.categoryApiService.getAllCategories();
  }

  public createCategory(category: Category){
    return this.categoryApiService.createCategory(category);
  }

  public deleteCatgory(id: number){
    return this.categoryApiService.deleteCategory(id);
  }
}
