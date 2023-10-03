// define the routes for components. Import the components and set up the routes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutMe', component:AboutMePageComponent},
  {path:'contact', component:ContactPageComponent},
  {path: 'search/:searchTerm',component:ProjectsPageComponent},
  {path: 'tag/:tag', component: ProjectsPageComponent},
  {path: 'projects-page', component:ProjectsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
