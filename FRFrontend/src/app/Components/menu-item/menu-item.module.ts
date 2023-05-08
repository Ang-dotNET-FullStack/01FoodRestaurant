import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CreateMenuItemComponent } from './create-menu-item/create-menu-item.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';



@NgModule({
  declarations: [
    MenuItemComponent,
    CreateMenuItemComponent,
    EditMenuItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuItemModule { }
