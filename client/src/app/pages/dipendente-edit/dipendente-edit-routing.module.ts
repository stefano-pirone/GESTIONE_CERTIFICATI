import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DipendenteEditComponent } from './dipendente-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DipendenteEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DipendenteEditRoutingModule { }
