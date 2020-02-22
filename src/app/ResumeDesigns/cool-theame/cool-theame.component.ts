import {Component, Input, OnInit} from '@angular/core';
import {DateUtils, User} from '../../Models';

@Component({
  selector: 'app-cool-theame',
  templateUrl: './cool-theame.component.html',
  styleUrls: ['./cool-theame.component.scss']
})
export class CoolTheameComponent implements OnInit {

  @Input() user: User;
  dateUtils = DateUtils;

  constructor() { }

  ngOnInit() {
  }

}
