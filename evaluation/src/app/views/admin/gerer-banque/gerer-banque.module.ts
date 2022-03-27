import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererBanqueRoutingModule } from './gerer-banque-routing.module';
import { GererBanqueComponent } from './gerer-banque/gerer-banque.component';


@NgModule({
  declarations: [
    GererBanqueComponent
  ],
  imports: [
    CommonModule,
    GererBanqueRoutingModule
  ]
})
export class GererBanqueModule { }
