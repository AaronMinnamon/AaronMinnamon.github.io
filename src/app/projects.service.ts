import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  projects: Array<any>;

  constructor() {
      this.projects = [
        {
          projectID: 'dyv',
          title: 'Discover Your Volvo',
          subtitle: 'Volvo Sales tool',
          role: 'Lead Developer',
          client: 'Volvo Cars US',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet', 'phone_iphone'],
          vimeoID: '230027821'
        },
        {
          projectID: 'kia-niro',
          title: 'Kia Web Based Training',
          subtitle: 'Web based micro learning courses',
          role: 'Lead Developer',
          client: 'Volvo Cars US',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet'],
          vimeoID: '230027821'
        },
        {
          projectID: 'kia-rio',
          title: 'Kia Web Based Training',
          subtitle: 'Web based micro learning courses',
          role: 'Lead Developer',
          client: 'Volvo Cars US',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet'],
          vimeoID: '230027821'
        },
        {
          projectID: 'nissan',
          title: 'dyv',
          subtitle: 'Volvo Sales tool',
          role: 'Lead Developer',
          client: 'Volvo Cars US',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['tablet'],
          vimeoID: '230027821'
        },
        {
          projectID: 'pgi',
          title: 'dyv',
          subtitle: 'Volvo Sales tool',
          role: 'Lead Developer',
          client: 'Volvo Cars US',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet', 'phone_iphone'],
          vimeoID: '230027821'
        }
      ];
  }

  public getProjects(projectID: string) {
      return this.projects.find(x => x.projectID === projectID); 
  }

}
