import { Component, Input, OnInit } from '@angular/core';
import { Entry } from '../../models/responseData';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() item: Entry;

  constructor() {}

  ngOnInit(): void {}
}
