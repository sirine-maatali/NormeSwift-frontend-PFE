import { GererBanqueComponent } from './gerer-banque/gerer-banque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:GererBanqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GererBanqueRoutingModule { }
