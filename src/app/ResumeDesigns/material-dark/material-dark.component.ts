import {Component, Input, OnInit} from '@angular/core';
import {DateUtils, User} from '../../Models';


@Component({
  selector: 'app-material-dark',
  templateUrl: './material-dark.component.html',
  styleUrls: ['./material-dark.component.scss']
})
export class MaterialDarkComponent implements OnInit {

  @Input() user: User;
  dateUtils = DateUtils;

  constructor() { }

  ngOnInit() {
    // localStorage.setItem('user', JSON.stringify(this.user));
    // const user = localStorage.getItem('user');
  }



}
