import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'sketches',
    loadChildren: () => import('./pages/sketches/sketches.module').then( m => m.SketchesPageModule)
  },
  {
    path: 'critique',
    loadChildren: () => import('./pages/critique/critique.module').then( m => m.CritiquePageModule)
  },
  {
    path: 'technologies',
    loadChildren: () => import('./pages/technologies/technologies.module').then( m => m.TechnologiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
