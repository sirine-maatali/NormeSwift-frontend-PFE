import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuditeurLayoutComponent } from './auditeur-layout/auditeur-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuditeurLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
