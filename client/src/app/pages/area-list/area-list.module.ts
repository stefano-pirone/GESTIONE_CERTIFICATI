import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from './area-list.component';
import { AreaListRoutingModule } from './area-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AreaListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AreaListComponent
  ]
})
export class AreaListModule { }
