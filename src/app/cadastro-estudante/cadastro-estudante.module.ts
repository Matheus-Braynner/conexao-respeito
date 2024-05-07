import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEstudantePageRoutingModule } from './cadastro-estudante-routing.module';

import { CadastroEstudantePage } from './cadastro-estudante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEstudantePageRoutingModule
  ],
  declarations: [CadastroEstudantePage]
})
export class CadastroEstudantePageModule {}
