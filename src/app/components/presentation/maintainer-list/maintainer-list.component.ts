import { Component, Input, OnInit } from '@angular/core';
import { Maintainer } from '../../../models/csv';

@Component({
  selector: 'app-maintainer-list',
  templateUrl: './maintainer-list.component.html',
  styleUrls: ['./maintainer-list.component.scss']
})
export class MaintainerListComponent implements OnInit {
  @Input() maintainers: Maintainer[];

  constructor() {}

  ngOnInit(): void {}

  trackByFn(item, index) {
    return index;
  }
}
