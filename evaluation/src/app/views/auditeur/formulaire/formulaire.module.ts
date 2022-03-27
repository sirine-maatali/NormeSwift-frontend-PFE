import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireRoutingModule } from './formulaire-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
  declarations: [
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormulaireRoutingModule
  ]
})
export class FormulaireModule { }
