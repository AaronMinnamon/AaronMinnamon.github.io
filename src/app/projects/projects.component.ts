import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-card', style({opacity: 0, transform: 'translateY(-100px)'})),
        query('.mat-card .colored-overlay', style({ left: '0' })),
        group([
          query('.mat-card', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
          ])
        ]),
        group([
          query('.colored-overlay', [
            animate('800ms ease', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0 }),
        group([
          query('.mat-card', [
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

  //Assign
    constructor() {}

  ngOnInit() {

  }


}
