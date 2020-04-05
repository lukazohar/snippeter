import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/generator/generator.module').then(
        m => m.GeneratorModule
      )
  },
  {
    path: 'generator',
    loadChildren: () =>
      import('./modules/generator/generator.module').then(
        m => m.GeneratorModule
      )
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
