import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NominationsComponent} from './nominations/nominations.component';
import {NominationsPageComponent} from './nominations-page/nominations-page.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'n'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'n', component: NominationsComponent}
    ]
  },
  {
    path: 'nominations',
    component: NominationsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
