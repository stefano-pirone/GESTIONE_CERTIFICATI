import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaEditComponent } from './area-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AreaEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaEditRoutingModule { }
