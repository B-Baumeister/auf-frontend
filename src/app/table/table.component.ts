import { Component, /*  ViewChild, */ OnInit } from '@angular/core';
/* import { MatTable } from '@angular/material/table';
 */ /* import { provideNativeDateAdapter } from '@angular/material/core'; */
/* import { trigger, transition, style, animate } from '@angular/animations';
 */ import { DataService } from '../data.service';
import { Schaetzungstable } from '../shared/schaetzungstable.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  /*  providers: [provideNativeDateAdapter()], */
  /* animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ], */
})
export class TableComponent implements OnInit {
  //gibt die Reihenfolge der Spalten an
  displayedColumns: string[] = [
    'position',
    'Kundenname',
    'Projektname',
    'Erstellername',
    'Erstelldatum',
  ];
  dataSource: Schaetzungstable[] = [];

  constructor(private dataService: DataService) {
    /*     this.dataSource = dataService.getProjects(); */
  }

  ngOnInit() {
    /*    this.dataSource = */ this.dataService
      .getProjects()
      .subscribe((data: Schaetzungstable[]) => {
        this.dataSource = data;
      });
  }
  /*   dataSource = [...ELEMENT_DATA]; */
  /* @ViewChild(MatTable) table!: MatTable<Schaetzungstable>;
   */

  /*   addProject() {
    this.dataSource.push({
      position: this.dataSource.length + 1,
      Kundenname: 'die Bäckereri',
      Projektname: 'Subtitle #1',
      Erstellername: 'Luzifer',
      Erstelldatum: new Date('2023 - 01 - 01'),
    });

    this.table.renderRows();

    console.log(this.dataSource); }
*/
}
