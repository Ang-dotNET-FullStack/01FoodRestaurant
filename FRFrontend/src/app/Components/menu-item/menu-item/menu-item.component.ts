import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Models/MenuItem.model';
import { MenuItemApiService } from 'src/app/services/API/menu-item-api.service';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  menuItems: any;
  constructor(private menuItemService: MenuItemService) {  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(){
    this.menuItemService.getMenuItems().subscribe(res=>{
      this.menuItems = res;
      console.log("Menu Items loaded successfully!");
    },
    (err)=>{
      console.log(err);
    });
  }
}
