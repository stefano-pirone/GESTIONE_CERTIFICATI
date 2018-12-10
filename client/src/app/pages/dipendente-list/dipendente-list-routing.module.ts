import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DipendenteListComponent } from './dipendente-list.component';

const routes: Routes = [
  {
    path: '',
    component: DipendenteListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DipendenteListRoutingModule { }
