import { GererArchitectureComponent } from './gerer-architecture/gerer-architecture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component:GererArchitectureComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererArchitectureRoutingModule { }
