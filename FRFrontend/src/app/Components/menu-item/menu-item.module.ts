import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UpsertMenuItemComponent } from './upsert-menu-item/upsert-menu-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuItemComponent,
    UpsertMenuItemComponent
 ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuItemModule { }