import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent implements OnInit {
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
