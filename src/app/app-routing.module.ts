import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from './pages/debug/debug.component';

const routes: Routes = [
  {
    path: '',
    component: DebugComponent,
  },
  {
    path: 'debug',
    component: DebugComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
