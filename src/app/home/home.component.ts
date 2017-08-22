import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.home-container', style({opacity: 0, transform: 'translateY(-100px)'})),
        query('.colored-overlay', style({ left: 0 })),
        group([
          query('.home-container', [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ]),
        ]),
        group([
          query('.colored-overlay', [
            animate('800ms ease', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('.home-container', [
            stagger(-100, [
              animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(100px)' }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public animatePage = true;


  constructor() { }

  ngOnInit() {
  }

}
