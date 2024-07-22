import { Component, OnInit,  } from '@angular/core';
import { ELEMENT_DATA } from '../table/table.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  addProject() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this['dataSource'].push(ELEMENT_DATA[randomElementIndex]);
    this['table'].renderRows();
  }

  constructor() {}

  ngOnInit() {}
}
