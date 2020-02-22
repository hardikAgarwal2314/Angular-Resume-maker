import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-social-profiles',
  templateUrl: './social-profiles.component.html',
  styleUrls: ['./social-profiles.component.scss']
})
export class SocialProfilesComponent implements OnInit {


  socailDetailsFormGroup: FormGroup;
  @Output() socialDetails = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.socailDetailsFormGroup = this._formBuilder.group({
      gmail: [null, Validators.required],
      introduction: [null, Validators.required],
      linkedin: [null],
      github: [null],
      personalWebsite: [null],
      personalBlog: [null],
    });
  }

  emitStepData() {
    const details = this.socailDetailsFormGroup.value;
    this.socialDetails.emit({socailDetails: details})
  }

}
