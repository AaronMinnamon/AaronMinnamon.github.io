import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  projects: Array<any>;

  constructor() {
      this.projects = [
        {title: "Discover your Volvo", subtitle: "Volvo Sales tool",languages:['angular','php'], cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];
  }

  public getProjects() {
      return this.projects;
  }

}
