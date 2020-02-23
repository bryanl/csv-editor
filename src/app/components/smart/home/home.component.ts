import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager/manager.service';
import { Router } from '@angular/router';
import { ClusterServiceVersion } from '../../../models/csv';
import { defaultCSV } from '../../../models/fixtures';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  csv: ClusterServiceVersion;

  constructor(private manager: ManagerService, private router: Router) {}

  ngOnInit(): void {
    this.manager.clusterServiceVersion.next(defaultCSV);
    const current = this.manager.clusterServiceVersion.getValue();
    if (!current) {
      this.router.navigate(['/upload']);
      return;
    }

    this.csv = current;

    if (this.csv.spec.icon.length > 0) {
      const iconData = atob(this.csv.spec.icon[0].base64data);
    }
  }
}
