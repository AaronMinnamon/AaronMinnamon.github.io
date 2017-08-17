import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  projects: Array<any>;

  constructor() {
      this.projects = [
        {
          projectID: 'dyv',
          title: 'Discover Your Volvo',
          subtitle: 'Volvo Cars US & Canada',
          // tslint:disable-next-line:max-line-length
          overview: 'Discover Your Volvo is a web application used by Volvo sales consultants to build customer profiles based on vehicles and features they are looking for in a new car. Featuring - Dual Language Support (English, French), Instant comparisons to competitive brands, Auto generated recommendations.',
          responsibility: 'As the Lead Feature Developer, I was responsible for handling client requests for new features to be added to the tool. Working closely with the creative team to prototype features to secure client approval and integrate into the production tool.',
          role: 'Lead Feature Developer',
          client: 'Volvo Cars US & Canada',
          period: '2015-2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'mysql', text: 'MySQL'},
            {class: 'php', text: 'PHP'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet', 'phone_iphone'],
          vimeoID: '230078858'
        },
        {
          projectID: 'kia-niro',
          title: 'Zero to Niro',
          subtitle: 'Kia University',
          // tslint:disable-next-line:max-line-length
          overview: 'This would be the first in a series of web based courses developed for Kia by Ardent Learning. Courses are desktop and iPad compatible integrated within the Kia University LMS',
          responsibility: 'As the Lead Developer, I was responsible for creating a course shell that would integrate within Kia\'s LMS in addition to developing interactions within the course.',
          role: 'Lead Developer',
          client: 'Kia Motors',
          period: '2016',
          context: 'Ardent Learning Inc.',
          languages: [
            { class: 'html', text: 'HTML' },
            { class: 'gulp', text: 'Gulp' },
            { class: 'sass', text: 'Sass' },
            { class: 'jquery', text: 'jQuery' }
          ],
          devices: ['laptop', 'tablet'],
          vimeoID: '230079635'
        },
        {
          projectID: 'kia-rio',
          title: 'The All New Kia Rio',
          subtitle: 'Kia University',
          // tslint:disable-next-line:max-line-length
          overview: 'The All New Kia Rio course is a web based training course developed to educate Kia sales staff on information and selling points specific to the Kia Rio.',
          responsibility: 'As the Lead Developer, I was responsible for taking static designs and turning them resuable templated interactions that worked within our previously developed course shell used for Zero to Niro.',
          role: 'Lead Developer',
          client: 'Kia Motors',
          period: '2017',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'gulp', text: 'Gulp'},
            {class: 'sass', text: 'Sass'},
            {class: 'jquery', text: 'jQuery'}
          ],
          devices: ['laptop', 'tablet'],
          vimeoID: '230079256'
        },
        {
          projectID: 'nissan',
          title: 'Nissan Service Excellence',
          subtitle: 'Nissan USA',
          // tslint:disable-next-line:max-line-length
          overview: 'Nissan SERV is a native iPad application developed to serve as a training companion during an instructor led course, used by both course facilitators and participants',
          responsibility: 'As Junior Developer, I was responsible for researching frameworks to develop the application based on technical requirements. Once chosen I developed the application using the Ionic framework alongside a Senior developer.',
          role: 'Junior Developer',
          client: 'Nissan USA',
          period: '2015-2016',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'angular', text: 'AngularJS'},
            {class: 'ionic', text: 'Ionic'},
            {class: 'mongo', text: 'mongoDB'},
            {class: 'sass', text: 'Sass'}
          ],
          devices: ['tablet'],
          vimeoID: '230079397'
        },
        {
          projectID: 'pgi',
          title: 'PGI Pop Quiz',
          subtitle: 'Platinum Guild International',
          overview: 'PGI Pop Quiz is a series of bite size quizzes developed to integrate with PGI\'s existing LMS.',
          // tslint:disable-next-line:max-line-length
          responsibility: 'As the Lead Developer, I was responsible for creating templated application that could create courses on the fly using a course data JSON file.',
          role: 'Lead Developer',
          client: 'Platinum Guild International',
          period: '2016',
          context: 'Ardent Learning Inc.',
          languages: [
            {class: 'html', text: 'HTML'},
            {class: 'angular', text: 'Angular 2'},
            {class: 'ionic', text: 'Ionic 2'},
            {class: 'sass', text: 'Sass'}
          ],
          devices: ['laptop', 'tablet', 'phone_iphone'],
          vimeoID: '230079320'
        }
      ];
  }

  public getProjects(projectID: string) {
      return this.projects.find(x => x.projectID === projectID); 
  }

}
