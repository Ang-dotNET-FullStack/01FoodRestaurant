import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import DataTable from 'datatables.net-dt';
import { UpsertMenuItemComponent } from './upsert-menu-item/upsert-menu-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuItemComponent,
    DataTable,
    UpsertMenuItemComponent
 ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuItemModule { }
