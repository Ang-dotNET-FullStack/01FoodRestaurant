import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';
import Category from 'src/app/Model/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private apiBaseService:ApiBaseService) { }

  getAllCategories(): Observable<Category>{
    return this.apiBaseService.getAll("Categories");
  }
}
