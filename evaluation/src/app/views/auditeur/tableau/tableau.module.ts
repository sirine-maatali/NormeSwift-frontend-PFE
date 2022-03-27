import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableauRoutingModule } from './tableau-routing.module';
import { TableauComponent } from './tableau/tableau.component';


@NgModule({
  declarations: [
    TableauComponent
  ],
  imports: [
    CommonModule,
    TableauRoutingModule
  ]
})
export class TableauModule { }
