import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/about-me',
        pathMatch: 'full'
      },
      {
        path: 'about-me',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { preload: true }
      },
      {
        path: 'skills',
        loadChildren: () => import('./skills/skills-routing.module').then(m => m.SkillsRoutingModule),
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
