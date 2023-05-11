import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'src/app/Models/MenuItem.model';
import { MenuItemService } from '../menu-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upsert-menu-item',
  templateUrl: './upsert-menu-item.component.html',
  styleUrls: ['./upsert-menu-item.component.css']
})
export class UpsertMenuItemComponent implements OnInit {

  menuItem: MenuItem;
  categories: any;
  foodTypes: any;

  constructor
  (
    private menuItemService: MenuItemService,
    private route: Router
  )
  { 
    this.menuItem = new MenuItem(0,"","","",0,0,0);
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadFoodTypes();
  }

  onSubmit(form : NgForm){
    this.menuItemService.createMenuItem(this.menuItem).subscribe(res=>{
      console.log("Menu Item created successfully!");
    },(err) =>{
      console.log(err);
    });
    this.route.navigate(['menuItem']);
  }

  loadCategories(){
    this.menuItemService.getCategories().subscribe(res=>{
      this.categories = res;
    },
    (err)=>{
      console.log(err);
    });
  }

  loadFoodTypes(){
    this.menuItemService.getFoodTypes().subscribe(res=>{
      this.foodTypes = res;
      console.log(this.menuItem);
    },
    (err)=>{
      console.log(err);
    });
  }
}
