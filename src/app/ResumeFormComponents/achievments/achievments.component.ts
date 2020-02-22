import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Achievements} from '../../Models';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.scss']
})
export class AchievmentsComponent implements OnInit {

  achievements: Achievements [] = [];

  @Output() achievementsDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addMoreAchievements()
  }

  addMoreAchievements() {
    this.achievements.push({
      information: null,
    });
  }

  removeAchievement(i) {
    this.achievements.splice(i, 1)
  }

  emitStepData() {
    this.achievementsDetails.emit({achievements: this.achievements})
  }

  isValidStep() {
    let isValid = true;
    this.achievements.forEach((data: Achievements) => {
      isValid = !(data.information);
    });
    return isValid;
  }

}
