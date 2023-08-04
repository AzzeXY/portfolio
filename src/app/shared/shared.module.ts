import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconListComponent } from './ui-components/icon-list/icon-list.component';

@NgModule({
  declarations: [IconListComponent],
  exports: [IconListComponent],
  imports: [CommonModule],
})
export class SharedModule {}
