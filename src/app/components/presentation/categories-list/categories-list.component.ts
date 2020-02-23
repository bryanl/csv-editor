import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnChanges {
  @Input() source: string;

  categories: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.categories = (changes.source.currentValue as string).split(',');
  }

  trackByFn(item, index) {
    return item;
  }
}
