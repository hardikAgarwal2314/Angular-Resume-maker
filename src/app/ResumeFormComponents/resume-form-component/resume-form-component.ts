import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {DemoUiComponent} from '../../UI-components/DemoUi-Component/DemoUi-Component';
import {User} from '../../Models';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form-component.html',
  styleUrls: ['./resume-form-component.scss'],
})
export class ResumeFormComponent implements OnInit {

  user: User;
  @Output() emitUser = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(src: string): void {
    this.dialog.open(DemoUiComponent, {
      width: '700px',
      backdropClass: 'backdropClass',
      data: {src: src}
    });
  }

  public setPersonalDetails(data) {
    if (!this.user) {
      this.user = {}
    }
    this.user = {
      ...this.user,
      ...data
    };
  }

  public setSectionClass() {
    document.getElementById('forms').className = ('muestra');

    setTimeout(() => {
      this.setSecondSectionClass();
    }, 13000);

    this.emitUser.emit(this.user);
  }


  public setSecondSectionClass() {
    document.getElementById('resume').className = ('muestra');
    document.getElementById('forms').className = ('display-none');
  }
}


