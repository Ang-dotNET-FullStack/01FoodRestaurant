import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'src/app/Models/MenuItem.model';

@Component({
  selector: 'app-upsert-menu-item',
  templateUrl: './upsert-menu-item.component.html',
  styleUrls: ['./upsert-menu-item.component.css']
})
export class UpsertMenuItemComponent implements OnInit {

  menuItem: MenuItem;
  constructor()
  { 
    this.menuItem = new MenuItem(0,"","","",0,0,0);
  }

  ngOnInit(): void {
  }

}
