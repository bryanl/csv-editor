import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  form: FormGroup;

  preview = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      csv: ['']
    });
  }

  onFileChange(files: FileList) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    console.log(mimeType);
    if (mimeType !== 'application/x-yaml') {
      return;
    }

    const reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = () => {
      this.preview = reader.result as string;
    };
  }
}
