import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClusterServiceVersion } from '../../models/csv';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  clusterServiceVersion = new BehaviorSubject<ClusterServiceVersion>(undefined);

  constructor() {}
}
