import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  providers: [ProjectsService],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-card', style({opacity: 0, transform: 'translateY(-200px)'})),
        query('.mat-card p, .mat-card-title, .mat-card-subtitle,.mat-chip', style({opacity: 0, transform: 'translateX(-200px)'})),
        query('.mat-card video', style({opacity: 0, transform: 'translateX(200px)'})),
        query('.mat-card', [
          stagger(100, [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ]),
        group([
          query('.mat-card p,.mat-card-title, .mat-card-subtitle,.mat-chip', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ]),
          query('.mat-card video', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.project-page-container', [ animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0 }))])
        ])
      ])
    ])
  ]
})
export class ProjectPageComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public doAnimate = true;
  projectID: string;
  private sub: any;
  project: any;

  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.projectID = params['project'];
    });

    this.project = this._projectsService.getProjects(this.projectID);
  }

}
