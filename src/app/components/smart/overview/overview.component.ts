import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager/manager.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  description: string;
  constructor(private manager: ManagerService) {}

  ngOnInit(): void {
    this.description = this.manager.clusterServiceVersion.getValue().spec.description;
  }
}
