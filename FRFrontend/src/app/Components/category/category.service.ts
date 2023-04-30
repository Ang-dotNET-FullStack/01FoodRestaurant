import { Injectable } from '@angular/core';
import { CategoryApiService } from 'src/app/services/API/category-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private categoryApiService:CategoryApiService) { }

  public getCategories(){
    return this.categoryApiService.getAllCategories();
  }
}
