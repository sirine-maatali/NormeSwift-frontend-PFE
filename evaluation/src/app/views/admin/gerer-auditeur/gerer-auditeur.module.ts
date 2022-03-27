import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GererAuditeurRoutingModule } from './gerer-auditeur-routing.module';
import { GererAuditeurComponent } from './gerer-auditeur/gerer-auditeur.component';


@NgModule({
  declarations: [
    GererAuditeurComponent
  ],
  imports: [
    CommonModule,
    GererAuditeurRoutingModule
  ]
})
export class GererAuditeurModule { }
