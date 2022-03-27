import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatRoutingModule } from './stat-routing.module';

import { SolutionComponent } from './solution/solution.component';
import { RisqueComponent } from './risque/risque.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [

    SolutionComponent,
    RisqueComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StatRoutingModule
  ]
})
export class StatModule { }
