import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WorkExp} from '../../Models';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  workExp: WorkExp [] = [];
  @Output() work = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addMoreWork();
  }

  public addMoreWork() {
    if (this.workExp.length < 3) {
      this.workExp.push({
        projectName: null,
        startDate: null,
        endDate: null,
        info: null
      });
    }
  }

  public removeWork(i) {
    this.workExp.splice(i, 1)
  }

  isValidStep() {
    let isValid = true;
    this.workExp.forEach((data: WorkExp) => {
      isValid = !(data.projectName && data.info && data.startDate && data.endDate);
    });
    return isValid;
  }

  emitStepData() {
    this.work.emit({workExp: this.workExp})
  }

}
