import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager/manager.service';
import { ClusterServiceVersion } from '../../../models/csv';

@Component({
  selector: 'app-viewer',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  description: string;
  csv: ClusterServiceVersion;

  constructor(private manager: ManagerService) {}

  ngOnInit(): void {
    this.csv = this.manager.clusterServiceVersion.getValue();
    this.description = this.csv.spec.description;
  }
}
