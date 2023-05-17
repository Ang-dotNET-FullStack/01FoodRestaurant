import { Component, OnInit } from '@angular/core';
import Category from 'src/app/Models/Category.model';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category(0, "", 0);
  loginForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
    ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      displayOrder:['',Validators.required]
    });
  }

  onSubmit(form: NgForm){
    this.categoryService.createCategory(this.category).subscribe(res=>{
      console.log("Submited successfully!");
      this.router.navigate(['category']);
    },
    err=>{
      console.log(err);
    });
  }

}
