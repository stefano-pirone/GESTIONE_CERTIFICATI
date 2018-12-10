import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsameListComponent } from './esame-list.component';

const routes: Routes = [
  {
    path: '',
    component: EsameListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsameListRoutingModule { }
