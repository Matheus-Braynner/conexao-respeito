import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroResponsavelPageRoutingModule } from './cadastro-responsavel-routing.module';

import { CadastroResponsavelPage } from './cadastro-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroResponsavelPageRoutingModule
  ],
  declarations: [CadastroResponsavelPage]
})
export class CadastroResponsavelPageModule {}
