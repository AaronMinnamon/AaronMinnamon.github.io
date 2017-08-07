import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MdChipsModule,MdCardModule,MdGridListModule, MdTooltipModule, MdListModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdSlideToggleModule} from '@angular/material';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ParticlesComponent } from './particles/particles.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { routing } from './app.routes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

import { ProjectsService } from './projects.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParticlesComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdChipsModule,
    MdCardModule,
    MdGridListModule,
    MdTooltipModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    ParticlesModule,
    routing
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
