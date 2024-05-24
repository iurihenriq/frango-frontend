import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/navigation/navigation.component').then((m) => m.NavigationComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadComponent: () =>
              import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
