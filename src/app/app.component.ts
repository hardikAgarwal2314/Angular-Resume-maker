import {Component, OnInit} from '@angular/core';
import {User} from './Models';
import * as JSPDF from 'jspdf';
import * as domtoimage from 'dom-to-image';

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
        number: 9999300755,
        last_name: 'Agarwal',
        first_name: 'Hardik',
        designation: 'Angular Developer',
        dob: Date.now(),
      },
      address: {
        line1: 'C-219/A',
        line2: 'New Panchwati colony',
        city: 'Ghaziabad',
        state: 'Up',
        pinCode: 20101101,
      },
      education: [
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate:  Date.now(),
          endDate:  Date.now(),
          name: 'Bachelor of Technology (IT)'
        },
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate:  Date.now(),
          endDate:  Date.now(),
          name: 'Bachelor of Technology (IT)'
        },
        {
          info: 'Worked on some live Web projects which includes full front-end development of websites including the project management)',
          startDate:  Date.now(),
          endDate: Date.now(),
          name: 'Bachelor of Technology (IT)'
        },
      ],
      workExp: [
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate:  Date.now(),
          endDate: Date.now(),
          projectName: 'Angular Developer (Intern) - DevsLane'
        },
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate:  Date.now(),
          endDate: Date.now(),
          projectName: 'Angular Developer (Intern) - DevsLane'
        },
        {
          info: '\n' +
            'Worked on some live Web projects which includes full front-end development of websites including the project management',
          startDate:  Date.now(),
          endDate: Date.now(),
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
          name: 'Angular',
          level: 80
        },
        {
          name: 'Redux',
          level: 70
        },
        {
          name: 'React',
          level: 60
        },
        {
          name: 'Github',
          level: 40
        },
        {
          name: 'OOPS',
          level: 85
        },
      ],
      socailDetails: {
        linkedin: 'hardik20111997@gmail.com',
        github: 'hardik20111997@gmail.com',
        gmail: 'hardik20111997@gmail.com',
        personalWebsite: 'hardik20111997@gmail.com',
        personalBlog: 'hardik20111997@gmail.com',
        introduction: 'My Objective is to make use of my Interpersonal Skills to achieve goals of a company where I can utilize my Positive Attitude and Technical Knowledge to the maximum.'
      }
    };
  }

  ngOnInit(): void {
    // document.getElementById('forms').className = ('display-none');
    // document.getElementById('dos').className = ('display-none');
    // document.getElementById('resume').className = ('display-none');
    document.getElementById('resume').className = ('muestra');
  }

  setSectionClass() {
    document.getElementById('dos').className = ('muestra');
    document.getElementById('uno').className = ('display-none');
  }

  setUser($event: any) {
    this.user = $event;
    localStorage.setItem(`${this.user}`, 'user');
  }

  exportAsPDF() {
    const node = document.getElementById('MyDIv');

    let img;
    let filename;
    let newImage;


    domtoimage.toPng(node, { quality: 1 })

      .then(function (dataUrl) {

        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function () {
          let doc;
          doc = new JSPDF('p', 'mm', 'a4');
          const width = doc.internal.pageSize.getWidth();
          const height = doc.internal.pageSize.getHeight();


          doc.addImage(newImage, 'PNG', 0, 0, width, height);
          filename = `user` + '.pdf';
          doc.save(filename);

        };


      })
      .catch(function (error) {
        console.log(error);
      });


  }
}

