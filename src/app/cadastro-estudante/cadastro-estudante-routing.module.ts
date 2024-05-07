import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEstudantePage } from './cadastro-estudante.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEstudantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEstudantePageRoutingModule {}
