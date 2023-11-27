import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { IconListComponent } from './shared/ui-components/icon-list/icon-list.component';
import { SharedModule } from './shared/shared.module';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { StoreDesignComponent } from './pages/store-design/store-design.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ImpressumComponent, DatenschutzComponent, PhotosComponent, WebDesignComponent, StoreDesignComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
