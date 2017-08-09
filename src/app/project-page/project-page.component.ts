import { Component, HostBinding, OnInit } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';


@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
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

  constructor() { }

  ngOnInit() {
  }

}
