import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsoEditComponent } from './corso-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CorsoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorsoEditRoutingModule { }
