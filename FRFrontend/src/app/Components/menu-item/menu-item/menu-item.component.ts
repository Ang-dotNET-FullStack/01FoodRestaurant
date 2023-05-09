import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/Models/MenuItem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  menuItem: MenuItem;
  constructor()
  {
    this.menuItem = new MenuItem(0,"","","",0,0,0);
  }

  ngOnInit(): void {
  }

}
