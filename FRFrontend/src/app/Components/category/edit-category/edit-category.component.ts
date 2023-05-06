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

  category: Category = new Category(0, "", 0);

  constructor(
    private categoryService:CategoryService,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(res=>{
      console.log("Submited successfully!");
    },
    err=>{
      console.log(err);
    });
    this.router.navigate(['category']);
  }
}
