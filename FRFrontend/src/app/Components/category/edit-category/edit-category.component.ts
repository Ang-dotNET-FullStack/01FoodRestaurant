import { Component, OnInit } from '@angular/core';
import Category from 'src/app/Model/Category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category = new Category(0, "", 0);

  constructor() { }

  ngOnInit(): void {
  }

}
