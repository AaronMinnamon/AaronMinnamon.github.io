import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSliderChecked = false;

  onSliderChange(isChecked){
    this.isSliderChecked = isChecked;
  }

  ngOnInit(): void {
  }
}
