import { DashboardComponent } from './dashboard/dashboard.component';
import { RisqueComponent } from './risque/risque.component';
import { SolutionComponent } from './solution/solution.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:DashboardComponent},
{path:'risque',component:RisqueComponent},
{path:'solution',component:SolutionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatRoutingModule { }
