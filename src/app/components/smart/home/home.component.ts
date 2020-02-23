import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private manager: ManagerService, private router: Router) {}

  ngOnInit(): void {
    const current = this.manager.clusterServiceVersion.getValue();
    if (!current) {
      this.router.navigate(['/upload']);
    }
  }
}
