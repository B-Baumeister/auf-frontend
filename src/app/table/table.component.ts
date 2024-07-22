import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { provideNativeDateAdapter } from '@angular/material/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [provideNativeDateAdapter()],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'Kundenname',
    'Projektname',
    'Erstellername',
    'Erstelldatum',
  ];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<schaetzungstable>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  constructor() {}

  ngOnInit() {}
}

export interface schaetzungstable {
  position: number;
  Kundenname: string;
  Projektname: string;
  Erstellername: string;
  Erstelldatum: Date;
}

export const ELEMENT_DATA: schaetzungstable[] = [
  {
    position: 1,
    Kundenname: 'die Bäckereri',
    Projektname: 'Subtitle #1',
    Erstellername: 'Luzifer',
    Erstelldatum: new Date('2023 - 01 - 01'),
  },
  {
    position: 2,
    Kundenname: 'Clown AG',
    Projektname: 'Subtitle #2',
    Erstellername: 'Marianna',
    Erstelldatum: new Date('2023 - 01 - 01'),
  },
  {
    position: 3,
    Kundenname: 'Book #3',
    Projektname: 'Subtitle #3',
    Erstellername: 'Henry',
    Erstelldatum: new Date('2023 - 01 - 01'),
  },

  /**
   * @title Adding and removing data when using an array-based datasource.
   */
];
