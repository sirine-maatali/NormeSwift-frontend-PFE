import { GererAuditeurComponent } from './gerer-auditeur/gerer-auditeur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:GererAuditeurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererAuditeurRoutingModule { }
