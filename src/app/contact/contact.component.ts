import { Component, HostBinding, OnInit } from '@angular/core';
import { GmapsComponent } from '../gmaps/gmaps.component';
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        query('.mat-card', style({ opacity: 0, transform: 'translateY(-200px)' })),
        query('.colored-overlay', style({ left: '0' })),
        query('.mat-card', [animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))]),
        group([
          query('.colored-overlay', [
              animate('800ms ease', style('*'))
          ])
        ])
      ]),
      transition(':leave', [
        group([
          // tslint:disable-next-line:max-line-length
          query('.mat-card', [animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(200px)' }))])
        ])
      ])
    ])
  ]
})

export class ContactComponent implements OnInit {

  @HostBinding('@pageAnimation')
  public animatePage = true;


  constructor() { }

  ngOnInit() {
  }

}
