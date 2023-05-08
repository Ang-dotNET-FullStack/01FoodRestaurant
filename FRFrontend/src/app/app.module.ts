import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { CategoryModule } from './components/category/category.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FoodTypeModule } from './components/food-type/food-type.module';
import { MenuItemModule } from './components/menu-item/menu-item.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    CategoryModule,
    HttpClientModule,
    NgbModule,
    FoodTypeModule,
    MenuItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
