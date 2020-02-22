import {Component, OnInit} from '@angular/core';
import {User} from './Models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  user: User;

  constructor() {
    this.user = {
      details: {
        number: 9999999,
        last_name: 'dsd sdsd',
        first_name: 'dsd sdsd',
        designation: 'dsdsd sddsdsdsd',
        dob: Date.now(),
      },
      address: {
        line1: 'dsds dsdds dsdsd dsdsdsd',
        line2: 'dsd sdsdd sdsdsd dsdsdsd',
        city: 'dsd sdsd',
        state: 'ds dsdsd',
        pinCode: 20101101,
      },
      education: [
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate: 'dsd sds ddsdsdsd',
          endDate: 'dsdsd sdd sdsdsd',
          name: 'Bachelor of Technology (IT)'
        },
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate: 'dsd sds ddsdsdsd',
          endDate: 'dsdsd sdd sdsdsd',
          name: 'Bachelor of Technology (IT)'
        },
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management)',
          startDate: 'dsd sds ddsdsdsd',
          endDate: 'dsdsd sdd sdsdsd',
          name: 'Bachelor of Technology (IT)'
        },
      ],
      workExp: [
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate: 'dsds ds  ddsdsdsd',
          endDate: 'dsdsds d dsdsdsd',
          projectName: 'Angular Developer (Intern) - DevsLane'
        },
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate: 'dsds ds  ddsdsdsd',
          endDate: 'dsdsds d dsdsdsd',
          projectName: 'Angular Developer (Intern) - DevsLane'
        },
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate: 'dsds ds  ddsdsdsd',
          endDate: 'dsdsds d dsdsdsd',
          projectName: 'Angular Developer (Intern) - DevsLane'
        },
      ],
      achievements: [
        {information: 'proj ectN amepr ojectName'},
        {information: 'pro jectNa meproject Name'},
        {information: 'pr ojectN ameproj ectName'},
        {information: 'proj ect Namepr ojectName'},
        {information: 'project Name projectName'},
      ],

      hobbies: [
        {name: 'proj ectN amepr ojectName'},
        {name: 'pro jectNa meproject Name'},
        {name: 'pr ojectN ameproj ectName'},
        {name: 'proj ect Namepr ojectName'},
        {name: 'project Name projectName'},
      ],
      skills: [
        {
          name: 'projectNameprojectName',
          level: 80
        },
        {
          name: 'projectNameprojectName',
          level: 70
        },
        {
          name: 'projectNameprojectName',
          level: 60
        },
        {
          name: 'projectNameprojectName',
          level: 40
        },
        {
          name: 'projectNameprojectName',
          level: 85
        },
      ],
      socailDetails: {
        linkedin: 'dfhj dfk  jdgkjfghkjf',
        github: 'dfhjdf kjdgkjfghkjf',
        gmail: 'dfhjdf kjdgkjf ghkjf',
        personalWebsite: 'dfhjd fkjdgkj fghkjf',
        personalBlog: 'dfhjd fkjdgkjfg hkjfd fhjdfkj dgkjfghkjf',
        introduction: 'My Objective is to make use of my Interpersonal Skills to achieve goals of a company where I can utilize my Positive Attitude and Technical Knowledge to the maximum.'
      }
    };
  }

  ngOnInit(): void {
    document.getElementById('forms').className = ('display-none');
    document.getElementById('dos').className = ('display-none');
    document.getElementById('resume').className = ('display-none');
    // document.getElementById('resume').className = ('muestra');
  }

  setSectionClass() {
    document.getElementById('dos').className = ('muestra');
    document.getElementById('uno').className = ('display-none');
  }

  setUser($event: any) {
    this.user = $event;
    localStorage.setItem(`${this.user}`, 'user');
  }
}

