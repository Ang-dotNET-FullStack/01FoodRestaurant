import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';
import Category from 'src/app/Models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  url:string ="Category";
  constructor(private apiBaseService:ApiBaseService) { }

  getAllCategories(): Observable<Category>{
    return this.apiBaseService.getAll(this.url);
  }

  getCategoryById(id: number): Observable<Category>{
    return this.apiBaseService.getOne(id, this.url);
  }

  createCategory<Category>(category: Category): Observable<Category>{    
    return this.apiBaseService.create(this.url, category);
  } 

  updateCategory<Category>(id: number, category: Category): Observable<Category>{
    return this.apiBaseService.update(this.url, id, category);
  }

  deleteCategory(id: number): Observable<any>{
    return this.apiBaseService.delete(this.url, id);
  }
}
