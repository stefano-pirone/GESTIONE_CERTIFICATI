import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsameEditComponent } from './esame-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EsameEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsameEditRoutingModule { }
