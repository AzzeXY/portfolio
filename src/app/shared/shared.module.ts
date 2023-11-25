import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconListComponent } from './ui-components/icon-list/icon-list.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCardComponent } from './ui-components/product-card/product-card.component';

@NgModule({
  declarations: [IconListComponent, NavbarComponent, ProductCardComponent],
  exports: [IconListComponent, NavbarComponent, ProductCardComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
