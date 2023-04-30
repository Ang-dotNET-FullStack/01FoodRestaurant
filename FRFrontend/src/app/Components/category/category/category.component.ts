import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public Categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.Categories = res;
    });
  }

}
