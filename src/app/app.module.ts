import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MdTooltipModule, MdListModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdSlideToggleModule} from '@angular/material';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ParticlesComponent } from './particles/particles.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParticlesComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTooltipModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    ParticlesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
