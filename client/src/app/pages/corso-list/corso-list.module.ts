import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorsoListComponent } from './corso-list.component';
import { CorsoListRoutingModule } from './corso-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CorsoListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CorsoListComponent
  ]
})
export class CorsoListModule { }
