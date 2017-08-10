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
        query('.mat-card', style({opacity: 0, transform: 'translateX(-200px)'})),
        group([
          query('.mat-card', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
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
  project: {};

  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.projectID = params['project'];
      //  this.title = this._projectsService.getProjects(id);
    });

    this.project = this._projectsService.getProjects(this.projectID);
    console.log(this.project);

  }

}
