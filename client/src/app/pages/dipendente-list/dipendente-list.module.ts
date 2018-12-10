import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DipendenteListComponent } from './dipendente-list.component';
import { DipendenteListRoutingModule } from './dipendente-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DipendenteListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DipendenteListComponent
  ]
})
export class DipendenteListModule { }
