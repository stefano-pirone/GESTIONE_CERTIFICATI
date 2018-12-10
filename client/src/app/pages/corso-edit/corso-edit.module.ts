import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsoEditComponent } from './corso-edit.component';
import { CorsoEditRoutingModule } from './corso-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CorsoEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CorsoEditComponent
  ]
})
export class CorsoEditModule { }
