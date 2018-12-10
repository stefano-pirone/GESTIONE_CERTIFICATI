import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorsoListComponent } from './corso-list.component';

const routes: Routes = [
  {
    path: '',
    component: CorsoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorsoListRoutingModule { }
