import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { ProjectsService } from '../projects.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  providers: [ProjectsService],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-card', style({opacity: 0, transform: 'translateY(-200px)'})),
        query('.mat-card p, .mat-card-title, .mat-card-subtitle,.mat-chip', style({opacity: 0, transform: 'translateY(-100px)'})),
        query('.mat-card iframe', style({opacity: 0})),
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
          query('.mat-card iframe', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ])
      ]),
      transition(':leave', [
        group([
          // tslint:disable-next-line:max-line-length
          query('.project-page-container', [animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0}))]),
          query('.mat-card', [animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(200px)'}))])
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
  videoUrl: SafeResourceUrl;

  constructor(private _projectsService: ProjectsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.projectID = params['project'];
    });

    this.project = this._projectsService.getProjects(this.projectID);
    // tslint:disable-next-line:max-line-length
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.project.vimeoID + '?autoplay=1&background=1');
  }

}
