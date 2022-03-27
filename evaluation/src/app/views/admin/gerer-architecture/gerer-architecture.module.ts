import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererArchitectureRoutingModule } from './gerer-architecture-routing.module';
import { GererArchitectureComponent } from './gerer-architecture/gerer-architecture.component';


@NgModule({
  declarations: [
    GererArchitectureComponent
  ],
  imports: [
    CommonModule,
    GererArchitectureRoutingModule
  ]
})
export class GererArchitectureModule { }
