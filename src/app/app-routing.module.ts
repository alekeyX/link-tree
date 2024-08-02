import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: '**',
    redirectTo: '/private'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
