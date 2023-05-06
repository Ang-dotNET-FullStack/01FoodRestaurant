import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Category from 'src/app/Model/Category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  
  category: Category;

  constructor(
    public categoryService:CategoryService,
    private router: Router
   ) 
    {
      this.category = this.categoryService.category;
    }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(res=>{
      console.log("Updated successfully!");
      
    },
    err=>{
      console.log(err);
    }
    
    )
    this.router.navigate(['category']);
  }
}
