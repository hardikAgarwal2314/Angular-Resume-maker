import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() personalData = new EventEmitter();
  maxDate = new Date(Date.now());

  personalDetailsFormGroup: FormGroup;
  gender = 'male';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalDetailsFormGroup = this._formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      number: [null, Validators.required],
      dob: [null, Validators.required],
      designation: [null, Validators.required],
    });
  }

  emitStepData() {
    const details = {
      details: {
        ...this.personalDetailsFormGroup.value,
        gender: this.gender,
      },
    };
    this.personalData.emit(details)
  }
}
