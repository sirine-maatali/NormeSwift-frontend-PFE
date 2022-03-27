import { SolutionComponent } from './views/auditeur/stat/solution/solution.component';
import { RisqueComponent } from './views/auditeur/stat/risque/risque.component';
import { GererBanqueModule } from './views/admin/gerer-banque/gerer-banque.module';
import { AuditeurLayoutComponent } from './layouts/auditeur-layout/auditeur-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './services/authService/auth.guard';

const routes: Routes = [
  {path:'',component:HomeLayoutComponent,
   children:[
     {path:'login',loadChildren:()=>import('./views/home/login/login.module').then(m=>m.LoginModule)},
     {path:'signup',loadChildren:()=>import('./views/home/signup/signup.module').then(m=>m.SignupModule)},

]
},

  {path:'admin',component:AdminLayoutComponent ,
  children:[
    {path:'gererBanque',loadChildren:()=>import('./views/admin/gerer-banque/gerer-banque.module').then(m=>m.GererBanqueModule)},
    {path:'gererAuditeur',loadChildren:()=>import('./views/admin/gerer-auditeur/gerer-auditeur.module').then(m=>m.GererAuditeurModule)},
    {path:'gererArchitecture',loadChildren:()=>import('./views/admin/gerer-architecture/gerer-architecture.module').then(m=>m.GererArchitectureModule)}


  ]},

  {path:'auditeur',component:AuditeurLayoutComponent,
  children:[
    {path:'formulaire',loadChildren:()=>import('./views/auditeur/formulaire/formulaire.module').then(m=>m.FormulaireModule)},

    {path:'tableau',loadChildren:()=>import('./views/auditeur/tableau/tableau.module').then(m=>m.TableauModule)},

    {path:'stat',loadChildren:()=>import('./views/auditeur/stat/stat.module').then(mod => mod.StatModule),}
  ]
  ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
