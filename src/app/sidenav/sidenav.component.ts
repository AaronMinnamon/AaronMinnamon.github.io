import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
      trigger('routerAnimations', [

      ])
    ]
})
export class SidenavComponent implements OnInit {

  //variable to hold boolean value to style1
  isClassVisible: true;
  @Output() onSliderChange = new EventEmitter<boolean>();

  sliderChanged(event) {
    this.onSliderChange.emit(event.checked);
  }

  constructor() { }

  ngOnInit() {
  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

}
