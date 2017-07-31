import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdListModule, MdSidenavModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ParticlesComponent } from './particles/particles.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdCheckboxModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
