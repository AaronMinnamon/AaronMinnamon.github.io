import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themeClass: string;
  title = 'app';

  ngOnInit(): void {
    // on init set the theme class
    this.themeClass = '';
  }
}
