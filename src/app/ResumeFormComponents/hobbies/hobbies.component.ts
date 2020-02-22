import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hobbies} from '../../Models';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})

export class HobbiesComponent implements OnInit {

  hobbies: Hobbies [] = [];

  @Output() hobbiesDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.addMoreHobbies();
  }

  addMoreHobbies() {
    this.hobbies.push({
      name: null,
    });
  }

  removeHobbies(i) {
    this.hobbies.splice(i, 1)
  }

  emitStepData() {
    this.hobbiesDetails.emit({hobbies: this.hobbies})
  }

  isValidStep() {
    let isValid = true;
    this.hobbies.forEach((data: Hobbies) => {
      isValid = !(data.name);
    });
    return isValid;
  }


}
