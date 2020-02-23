import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-detail',
  templateUrl: './overview-detail.component.html',
  styleUrls: ['./overview-detail.component.scss']
})
export class OverviewDetailComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
