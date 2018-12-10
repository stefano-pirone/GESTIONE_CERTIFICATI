import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsameListComponent } from './esame-list.component';
import { EsameListRoutingModule } from './esame-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EsameListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EsameListComponent
  ]
})
export class EsameListModule { }
