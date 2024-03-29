import { Component, OnInit, Inject, Input } from '@angular/core';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() name: string;
  @Input() viewBox: string;
  @Input() width: string;
  @Input() height: string;

  constructor(@Inject(WINDOW) private window: Window, ) {}

  get absUrl() {
    return window.location.href;
  }

  ngOnInit() {
  }

}
