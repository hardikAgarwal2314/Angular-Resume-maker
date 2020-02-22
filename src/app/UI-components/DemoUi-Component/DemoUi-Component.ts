import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-demo-ui',
  templateUrl: 'DemoUi-Component.html',
  styleUrls: ['DemoUi-Component.scss'],
})
export class DemoUiComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DemoUiComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

}
