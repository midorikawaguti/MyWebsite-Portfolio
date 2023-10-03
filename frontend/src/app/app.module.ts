import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutMePageComponent } from './components/pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    AboutMePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
