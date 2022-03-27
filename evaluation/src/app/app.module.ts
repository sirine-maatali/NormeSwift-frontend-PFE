import { SignupRoutingModule } from './views/home/signup/signup-routing.module';
import { GererBanqueModule } from './views/admin/gerer-banque/gerer-banque.module';
import { GererAuditeurModule } from './views/admin/gerer-auditeur/gerer-auditeur.module';
import { GererArchitectureModule } from './views/admin/gerer-architecture/gerer-architecture.module';
import { TableauModule } from './views/auditeur/tableau/tableau.module';
import { FormulaireModule } from './views/auditeur/formulaire/formulaire.module';
import { SignupModule } from './views/home/signup/signup.module';
import { LoginModule } from './views/home/login/login.module';
import { StatModule } from './views/auditeur/stat/stat.module';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './views/home/login/login-routing.module';
//import { HttpConfigInterceptor } from '../../src/app/interceptor/httpconfig.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    // StatModule,
    // FormulaireModule,
    // TableauModule,
    // GererArchitectureModule,
    // GererAuditeurModule,
    // GererBanqueModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
