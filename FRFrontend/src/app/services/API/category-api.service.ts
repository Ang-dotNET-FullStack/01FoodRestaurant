import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private apiBaseService:ApiBaseService) { }

  getCategory<T>(): Observable<T>{
    return this.apiBaseService.getAll("Categories");
  }
}
