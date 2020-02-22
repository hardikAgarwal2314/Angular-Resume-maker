import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Images} from '../resume-templates/resume-templates';

@Component({
  selector: 'app-resume-component',
  templateUrl: './ResumeComponent.html',
  styleUrls: ['./ResumeComponent.scss'],
})
export class ResumeComponent implements OnInit {

  @Input() image: Images;
  @Output() emitIndex = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit(): void {
  }

  setSelectedIndex(index: number) {
    this.emitIndex.emit(index);
  }
}
