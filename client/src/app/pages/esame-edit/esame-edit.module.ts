import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsameEditComponent } from './esame-edit.component';
import { EsameEditRoutingModule } from './esame-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EsameEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EsameEditComponent
  ]
})
export class EsameEditModule { }
