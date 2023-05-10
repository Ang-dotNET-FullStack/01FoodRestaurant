import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/Models/MenuItem.model';
import { MenuItemApiService } from 'src/app/services/API/menu-item-api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor
  (
    private menuItemApiService: MenuItemApiService
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

  public reloadPage(){
    window.location.reload();
  }
}
