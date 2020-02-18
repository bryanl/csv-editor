import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  openValue = false;

  @Input()
  get open() {
    return this.openValue;
  }

  set open(val) {
    this.openValue = val;
    this.openChange.emit(this.openValue);
  }

  @Output()
  openChange = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

}
