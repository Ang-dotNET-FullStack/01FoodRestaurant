import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'src/app/Models/MenuItem.model';
import { MenuItemService } from '../menu-item.service';
import { Router } from '@angular/router';
import Category from 'src/app/Models/Category.model';
import FoodType from 'src/app/Models/FoodType.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upsert-menu-item',
  templateUrl: './upsert-menu-item.component.html',
  styleUrls: ['./upsert-menu-item.component.css']
})
export class UpsertMenuItemComponent implements OnInit {

  menuItem: MenuItem;
  category: Category;
  foodType: FoodType;
  categories: any;
  foodTypes: any;

  constructor
  (
    private menuItemService: MenuItemService,
    private route: Router,
    private http: HttpClient
  )
  { 
    this.category = new Category(0,"",0);
    this.foodType = new FoodType(0, "");
    this.menuItem = new MenuItem(0,"","","",0,0,0, this.category, this.foodType);
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadFoodTypes();
  }

  onSubmit(form : NgForm){  
    this.menuItemService.createMenuItem(this.menuItem).subscribe(res=>{
      console.log("Menu Item created successfully!");
      this.route.navigate(['menuItem']);
    },(err) =>{
      console.log(err);
    }); 
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