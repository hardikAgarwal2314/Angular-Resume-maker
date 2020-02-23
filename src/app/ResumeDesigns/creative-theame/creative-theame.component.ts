import {Component, Input, OnInit} from '@angular/core';
import {DateUtils, User} from '../../Models';

@Component({
  selector: 'app-creative-theame',
  templateUrl: './creative-theame.component.html',
  styleUrls: ['./creative-theame.component.scss']
})
export class CreativeTheameComponent implements OnInit {

  @Input() user: User;
  dateUtils = DateUtils;

  constructor() { }

  ngOnInit() {
  }

}
