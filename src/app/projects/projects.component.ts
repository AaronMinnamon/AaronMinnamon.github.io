import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { ProjectsService } from '../projects.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-grid-tile', style({opacity: 0, transform: 'translateY(-100px)'})),
        // query('.mat-card .colored-overlay', style({ left: '0' })),
        group([
          query('.mat-grid-tile', [
            stagger(200, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0 }),
        group([
          query('.mat-grid-tile', [
            stagger(-100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(100px)' }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public doAnimate = true;
  projects: Array<any>;

  //Assign
  constructor(private _projectsService: ProjectsService, public snackBar: MdSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open('Please view on Tablet or Desktop!', action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.projects = this._projectsService.getAllProjects();
  }


}
