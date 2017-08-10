import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  projects: Array<any>;

  constructor() {
      this.projects = [
        {
          projectID: "dyv",
          title: "Discover Your Volvo",
          subtitle: "Volvo Sales tool",
          role: "Lead Developer",
          client: "Volvo Cars US",
          period: "2015-2017",
          context: "Ardent Learning Inc.",
          languages:[
            {class:'html',text:'HTML'},
            {class:'mysql',text:'MySQL'},
            {class:'php',text:'PHP'},
            {class:'jquery',text:'jQuery'}
          ],
          devices:['laptop','tablet','phone_iphone']
        },
        {
          projectID: "kia",
          title: "Kia Web Based Training",
          subtitle: "Web based micro learning courses",
          role: "Lead Developer",
          client: "Volvo Cars US",
          period: "2015-2017",
          context: "Ardent Learning Inc.",
          languages:[
            {class:'html',text:'HTML'},
            {class:'mysql',text:'MySQL'},
            {class:'php',text:'PHP'},
            {class:'jquery',text:'jQuery'}
          ]
        },
        {
          projectID: "nissan",
          title: "dyv",
          subtitle: "Volvo Sales tool",
          role: "Lead Developer",
          client: "Volvo Cars US",
          period: "2015-2017",
          context: "Ardent Learning Inc.",
          languages:[
            {class:'html',text:'HTML'},
            {class:'mysql',text:'MySQL'},
            {class:'php',text:'PHP'},
            {class:'jquery',text:'jQuery'}
          ]
        },
        {
          projectID: "pgi",
          title: "dyv",
          subtitle: "Volvo Sales tool",
          role: "Lead Developer",
          client: "Volvo Cars US",
          period: "2015-2017",
          context: "Ardent Learning Inc.",
          languages:[
            {class:'html',text:'HTML'},
            {class:'mysql',text:'MySQL'},
            {class:'php',text:'PHP'},
            {class:'jquery',text:'jQuery'}
          ]
        }
      ];
  }

  public getProjects(projectID: string) {
      return this.projects.find(x => x.projectID === projectID);;
  }

}
