import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Level {
  name: string;
  isFulfilled: boolean;
}

@Component({
  selector: 'app-capability-level',
  templateUrl: './capability-level.component.html',
  styleUrls: ['./capability-level.component.scss']
})
export class CapabilityLevelComponent implements OnChanges {
  @Input() currentLevel: string;

  levels: Level[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.currentLevel.isFirstChange() ||
      changes.currentLevel.currentValue !== changes.currentLevel.previousValue
    ) {
      this.levels = generateLevels(this.currentLevel);
    }
  }

  trackByFn(index, item) {
    return index;
  }

  iconShape(isFulfilled: boolean): string {
    return isFulfilled ? 'plus-circle' : 'times-circle';
  }
}

const knownLevels = [
  'Base Install',
  'Seamless Upgrades',
  'Full Lifecycle',
  'Deep Insights',
  'Auto Pilot'
];

function generateLevels(current: string): Level[] {
  let found = true;

  return knownLevels.map(l => {
    const o = { name: l, isFulfilled: found };
    if (current === l) {
      found = false;
    }
    return o;
  });
}
