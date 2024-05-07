import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importe o LoginComponent

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro-professor',
    loadChildren: () => import('./cadastro-professor/cadastro-professor.module').then( m => m.CadastroProfessorPageModule)
  },
  {
    path: 'cadastro-estudante',
    loadChildren: () => import('./cadastro-estudante/cadastro-estudante.module').then( m => m.CadastroEstudantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
