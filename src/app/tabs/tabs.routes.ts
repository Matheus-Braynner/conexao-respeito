import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CadastroPage } from '../cadastro/cadastro.page';
import { LoginComponent } from '../login/login.page';
import { CadastroEstudantePage } from '../cadastro-estudante/cadastro-estudante.page';
import { CadastroProfessorPage } from '../cadastro-professor/cadastro-professor.page';
import { CadastroResponsavelPage } from '../cadastro-responsavel/cadastro-responsavel.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.Tab1Page),
      },
      {
        path: 'materiais',
        loadComponent: () =>
          import('../materiais/materiais.page').then((m) => m.Tab2Page),
      },
      {
        path: 'atividades',
        loadComponent: () =>
          import('../atividades/atividades.page').then((m) => m.Tab3Page),
      },
      {
        path: 'pessoas',
        loadComponent: () =>
          import('../pessoas/pessoas.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    children: [
    ]
  },

  {
    path: 'cadastro',
    component: CadastroPage,
    children: [
    ]
  },

  {
    path: 'cadastro/estudante',
    component: CadastroEstudantePage,
    children: [
    ]
  },

  {
    path: 'cadastro/professor',
    component: CadastroProfessorPage,
    children: [
    ]
  },

  {
    path: 'cadastro/responsavel',
    component: CadastroResponsavelPage,
    children: [
    ]
  },
];
