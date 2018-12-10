import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DipendenteEditComponent } from './dipendente-edit.component';
import { DipendenteEditRoutingModule } from './dipendente-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DipendenteEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DipendenteEditComponent
  ]
})
export class DipendenteEditModule { }
