import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Skills} from '../../Models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skills [] = [];

  @Output() skillsDetils = new EventEmitter();

  constructor() { }

  public formatLabel(value: number) {
    return value + '%';
  }

  ngOnInit() {
    this.addMoreSkills();
  }

  addMoreSkills() {
    this.skills.push({
      name: null,
      level: 0,
    });
  }

  removeSkill(i) {
    this.skills.splice(i, 1)
  }

  setSkillLevel($event: number, index: number) {
    this.skills[index].level = $event;
  }

  emitStepData() {
    this.skillsDetils.emit({skills: this.skills})
  }

  isValidStep() {
    let isValid = true;
    this.skills.forEach((data: Skills) => {
      isValid = !(data.name);
    });
    return isValid;
  }


}
