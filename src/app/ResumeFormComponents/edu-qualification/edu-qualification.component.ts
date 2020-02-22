import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Education} from '../../Models';

@Component({
  selector: 'app-edu-qualification',
  templateUrl: './edu-qualification.component.html',
  styleUrls: ['./edu-qualification.component.scss']
})
export class EduQualificationComponent implements OnInit {

  educationalQualification: Education [] = [];
  @Output() education = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addMoreEdu();
  }

  addMoreEdu() {
    if (this.educationalQualification.length < 3) {
      this.educationalQualification.push({
        name: null,
        startDate: null,
        endDate: null,
        info: null
      });
    }
  }

  emitStepData() {
    this.education.emit({education: this.educationalQualification})
  }

  removeEdu(i) {
    this.educationalQualification.splice(i, 1)
  }

  isValidStep() {
    let isValid = true;
    this.educationalQualification.forEach((data: Education) => {
      isValid = !(data.name && data.info && data.startDate && data.endDate);
    });
    return isValid;
  }
}
