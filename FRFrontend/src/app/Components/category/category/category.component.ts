import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import Category from 'src/app/Models/Category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category;
  public Categories: any;

  constructor(public categoryService: CategoryService) 
  {
    this.category= new Category(0, "", 0);
  }

  ngOnInit(): void {    
    this.loadAllCategories();
    
  }

  loadAllCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.Categories = res;
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  onDelete(id: number){
    this.categoryService.deleteCatgory(id).subscribe(
      (res) => {
        this.categoryService.reloadPage();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
