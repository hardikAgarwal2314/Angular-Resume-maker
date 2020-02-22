import {Component, OnInit} from '@angular/core';

export class Images {
  name: string;
  src: string;
  index: number;
}

@Component({
  selector: 'app-resume-templates',
  templateUrl: './resume-templates.html',
  styleUrls: ['./resume-templates.scss'],
})
export class ResumeTemplatesComponent implements OnInit {

  selectedIndex: number;

  images: Images[] = [
    {
      name: 'material-dark',
      src: '../assets/preview/resume-material-dark.png',
      index: 0,
    },
    {
      name: 'oblique',
      src: '../assets/preview/resume-oblique.png',
      index: 1,
    },
    {
      name: 'purple',
      src: '../assets/preview/resume-purple.png',
      index: 2,
    },
    {
      name: 'cool',
      src: '../assets/preview/resume-cool.png',
      index: 3,
    },
    {
      name: 'side-bar',
      src: '../assets/preview/resume-side-bar.png',
      index: 4,
    },
    {
      name: 'side-bar-rtl',
      src: '../assets/preview/resume-side-bar-rtl.png',
      index: 5,
    },
    {
      name: 'left-right-rtl',
      src: '../assets/preview/resume-left-right-rtl.png',
      index: 6,
    },
    {
      name: 'left-right',
      src: '../assets/preview/resume-left-right.png',
      index: 7,
    },
    {
      name: 'creative',
      src: '../assets/preview/resume-creative.png',
      index: 8,
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
}

