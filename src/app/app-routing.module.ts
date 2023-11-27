import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { StoreDesignComponent } from './pages/store-design/store-design.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'web-design',
    component: WebDesignComponent,
  },
  {
    path: 'store-design',
    component: StoreDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
