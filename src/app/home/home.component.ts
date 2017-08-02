import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageAnimation', [
      // transition(':enter', [
      //   query('.home-container h1', style({opacity: 0, transform:'scale(0)'})),
      //   query('.home-container h2', style({opacity: 0, transform:'scale(0)'})),
      //   query('.home-container button', style({opacity: 0})),
      //   group([
      //     query('.home-container h1,h2', [
      //       animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
      //     ]),
      //     query('.home-container button', [
      //       stagger(100, [
      //         animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
      //       ])
      //     ])
      //   ])
      // ]),
      transition(':enter', [
        query('.home-container', style({opacity: 0, transform: 'translateY(-100px)'})),
        group([
          query('.home-container', [
            animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0 }),
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(100px)' }))
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
