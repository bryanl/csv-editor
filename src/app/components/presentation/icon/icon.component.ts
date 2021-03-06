import { Component, Input } from '@angular/core';
import { Icon } from '../../../models/csv';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  template: `
    <img [src]="src()" [ngStyle]="{ height: height, width: width }" />
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icons: Icon[];

  @Input() height = '80px';

  @Input() width = '80px';

  constructor(private sanitizer: DomSanitizer) {}

  src(): SafeUrl {
    console.log(this.icons);
    const cur = this.icons[0];
    const url = `data:${cur.mediatype};base64,${cur.base64data}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
