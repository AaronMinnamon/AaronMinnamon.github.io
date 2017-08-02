import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-grid-tile', style({opacity: 0, transform: 'translateY(-100px)'})),
        group([
          query('.mat-grid-tile', [
            stagger(100, [
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

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
