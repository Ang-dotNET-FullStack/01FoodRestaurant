import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/Models/MenuItem.model';
import { CategoryApiService } from 'src/app/services/API/category-api.service';
import { FoodTypeApiService } from 'src/app/services/API/food-type-api.service';
import { MenuItemApiService } from 'src/app/services/API/menu-item-api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor
  (
    private menuItemApiService: MenuItemApiService,
    private categoryApiService: CategoryApiService,
    private foodTypeApiService: FoodTypeApiService
  ) { }

  public getMenuItems(){
    return this.menuItemApiService.getAllMenuItems();
  }

  public createMenuItem(menuItem: MenuItem){
    return this.menuItemApiService.createMenuItem(menuItem);
  }

  public updateMenuItem(id: number, menuItem: MenuItem){
    return this.menuItemApiService.updateMenuItem(id, menuItem);
  }
  public deleteCatgory(id: number){
    return this.menuItemApiService.deleteMenuItem(id);
  }

  public getCategories(){
    return this.categoryApiService.getAllCategories();
  }

  public getFoodTypes(){
    return this.foodTypeApiService.getAllFoodTypes();
  }

  public reloadPage(){
    window.location.reload();
  }
}
