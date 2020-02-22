import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressDetailsFormGroup: FormGroup;
  @Output() address = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressDetailsFormGroup = this._formBuilder.group({
      line1: [null, Validators.required],
      line2: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      pinCode: [null, Validators.required],
    });
  }

  emitStepData() {
    const details = this.addressDetailsFormGroup.value;
    this.address.emit({address: details})
  }

}
