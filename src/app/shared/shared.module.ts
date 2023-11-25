import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconListComponent } from './ui-components/icon-list/icon-list.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [IconListComponent, NavbarComponent],
  exports: [IconListComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
