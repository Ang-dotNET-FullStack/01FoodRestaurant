import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';
import Category from 'src/app/Model/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  url:string ="Categories";
  constructor(private apiBaseService:ApiBaseService) { }

  getAllCategories(): Observable<Category>{
    return this.apiBaseService.getAll(this.url);
  }

  createCategory<Category>(category: Category): Observable<Category>{    
    return this.apiBaseService.create(this.url, category);
  } 

  deleteCategory(id: number): Observable<any>{
    return this.apiBaseService.delete(this.url, id);
  }
}
