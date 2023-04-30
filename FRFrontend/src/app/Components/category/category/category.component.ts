import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ApiBaseService } from 'src/app/services/api-base.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public Categories: any;

  constructor(private categoryService: CategoryService, private ApiBaseService: ApiBaseService) { }

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.Categories = res;
    });
  }

}
