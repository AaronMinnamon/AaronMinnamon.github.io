import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
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

}
