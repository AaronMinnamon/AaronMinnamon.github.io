import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-card', style({opacity: 0, transform: 'translateY(-100px)'})),
        group([
          query('.mat-card', [
            stagger(100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
            ])
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
export class ResumeComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public doAnimate = true;

  tiles = [
    {
    title: 'Education',
    cols: 3,
    rows: 3,
    color: 'lightblue'
   },
    {title: 'Skills', cols: 1, rows: 2, color: 'lightgreen'},
    {title: 'Skills', cols: 3, rows: 1, color: 'lightpink'},
    {title: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
