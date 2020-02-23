import { Component, Input, OnInit } from '@angular/core';
import { AppLink } from '../../../models/csv';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input()
  links: AppLink[];

  constructor() {}

  ngOnInit(): void {}

  trackByFn(item, index) {
    return item;
  }
}
