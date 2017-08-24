import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
// tslint:disable-next-line:max-line-length
import { MdChipsModule, MdSnackBarModule, MdToolbarModule, MdMenuModule, MdCardModule, MdGridListModule, MdTooltipModule, MdListModule, MdSidenavModule, MdButtonModule, MdCheckboxModule, MdSlideToggleModule} from '@angular/material';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { ResponsiveModule } from 'ng2-responsive'

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
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
import { ProjectPageComponent } from './project-page/project-page.component';
import { GmapsComponent } from './gmaps/gmaps.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParticlesComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    ProjectPageComponent,
    GmapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Angulartics2Module,
    MdChipsModule,
    MdCardModule,
    MdGridListModule,
    MdTooltipModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdSlideToggleModule,
    MdToolbarModule,
    ParticlesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBIGPkMqioWR7mSTAUDGHs0G9rDEFTOCbY'
    }),
    routing,
    ResponsiveModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
