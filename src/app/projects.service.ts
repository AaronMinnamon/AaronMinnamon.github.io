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
          devices:['laptop','tablet','phone_iphone'],
          clips:['dyv.mp4','dyv_video.mp4']
        },
        {
          projectID: "kia-niro",
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
          ],
          devices:['laptop','tablet'],
          clips:['niro_walkaround.mp4','niro_facts.mp4']
        },
        {
          projectID: "kia-rio",
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
          ],
          devices:['laptop','tablet'],
          clips:['rio_bingo.mp4','rio_daniel.mp4']
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
          ],
          devices:['tablet'],
          clips:['nserv_intro.mp4','nserv_checks.mp4']
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
          ],
          devices:['laptop','tablet','phone_iphone'],
          clips:['pgi_intro.mp4','pgi_summary.mp4']
        }
      ];
  }

  public getProjects(projectID: string) {
      return this.projects.find(x => x.projectID === projectID);;
  }

}
