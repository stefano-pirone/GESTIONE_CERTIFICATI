import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaEditComponent } from './area-edit.component';
import { AreaEditRoutingModule } from './area-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AreaEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AreaEditComponent
  ]
})
export class AreaEditModule { }
