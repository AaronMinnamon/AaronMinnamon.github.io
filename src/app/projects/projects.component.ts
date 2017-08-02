import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('p', style({opacity: 0, transform: 'translateY(-100px)'})),
        group([
          query('p', [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0 }),
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-100px)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public doAnimate = true;

  constructor() { }

  ngOnInit() {
  }

}
