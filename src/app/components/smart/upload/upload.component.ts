import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as YAML from 'yaml';
import {
  checkClusterServiceVersion,
  ClusterServiceVersion
} from '../../../models/csv';
import { ManagerService } from '../../../services/manager/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  form: FormGroup;

  preview = '';

  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private manager: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      csv: ['']
    });
  }

  onFileChange(files: FileList) {
    this.error = '';

    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type.length ? files[0].type : 'unknown';
    if (mimeType !== 'application/x-yaml') {
      this.error = `Upload file is not YAML. It is ${mimeType}.`;
      return;
    }

    const reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = () => {
      this.preview = reader.result as string;

      const csv = YAML.parse(this.preview) as ClusterServiceVersion;

      if (!checkClusterServiceVersion(csv)) {
        this.error = 'Upload file is not a Cluster Service Version.';
        return;
      }

      this.manager.clusterServiceVersion.next(csv);
      this.router.navigate(['/']);
    };
  }
}
