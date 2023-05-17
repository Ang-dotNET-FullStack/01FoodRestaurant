import { Injectable } from '@angular/core';
import { ApiBaseService } from '../api-base.service';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/Models/MenuItem.model'; 

@Injectable({
  providedIn: 'root'
})
export class MenuItemApiService {

  url:string = "MenuItem";
  constructor(private apiBaseService:ApiBaseService) { }

  getAllMenuItems(): Observable<MenuItem>{
    return this.apiBaseService.getAll(this.url);
  }

  createMenuItem<MenuItem>(menuItem: MenuItem): Observable<MenuItem>{    
    return this.apiBaseService.create(this.url, menuItem);
  } 

  updateMenuItem<MenuItem>(id: number, menuItem: MenuItem): Observable<MenuItem>{
    return this.apiBaseService.update(this.url, id, menuItem);
  }

  deleteMenuItem(id: number): Observable<any>{
    return this.apiBaseService.delete(this.url, id);
  }
}
