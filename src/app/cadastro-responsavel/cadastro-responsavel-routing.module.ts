import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroResponsavelPage } from './cadastro-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroResponsavelPageRoutingModule {}
