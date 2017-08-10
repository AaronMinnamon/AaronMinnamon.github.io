// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectPageComponent } from './project-page/project-page.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, data: { animation: { value: 'home', } } },
  { path: 'projects', component: ProjectsComponent,
    children: [
      {
        path: ':project',
        component: ProjectPageComponent
      }
    ],
    data: { animation: { value: 'projects', } } },
  { path: 'about', component: AboutComponent, data: { animation: { value: 'about', } } },
  { path: 'contact', component: ContactComponent, data: { animation: { value: 'contact', } } },
  { path: 'resume', component: ResumeComponent, data: { animation: { value: 'resume', } } }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
