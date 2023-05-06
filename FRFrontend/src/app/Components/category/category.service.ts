import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/app/Model/Category.model';
import { CategoryApiService } from 'src/app/services/API/category-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: Category;

  constructor(
    private categoryApiService:CategoryApiService,
    private router:Router
    ) 
  {
    this.category= new Category(0,"",0);
  }

  public getCategories(){
    return this.categoryApiService.getAllCategories();
  }

  public createCategory(category: Category){
    return this.categoryApiService.createCategory(category);
  }

  public updateCategory(id: number, category: Category){
    return this.categoryApiService.updateCategory(id, category);
  }
  public deleteCatgory(id: number){
    return this.categoryApiService.deleteCategory(id);
  }

  public reloadPage(){
    window.location.reload();
  }

  public loadData(category:Category){
    this.category.id=category.id;
    this.category.name=category.name;
    this.category.displayOrder=category.displayOrder;
    this.router.navigate(['editCategory']);
  }
}
