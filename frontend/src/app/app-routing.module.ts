// define the routes for components. Import the components and set up the routes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'search/:searchTerm',component:ProjectsPageComponent},
  {path: 'tag/:tag', component: ProjectsPageComponent},
  {path: 'projects-page', component:ProjectsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
