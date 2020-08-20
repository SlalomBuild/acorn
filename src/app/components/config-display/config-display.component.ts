import { Component, Input } from '@angular/core';

import { Config } from 'app/models';

@Component({
  selector: 'app-config-display',
  templateUrl: './config-display.component.html',
  styleUrls: ['./config-display.component.css']
})
export class ConfigDisplayComponent {
  @Input() config: Config;
}
