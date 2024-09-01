import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'remote1',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'remote2',
    loadChildren: () =>
      import('remoteapp2/homeModule').then((module) => module.HomeModule),
  },
];
