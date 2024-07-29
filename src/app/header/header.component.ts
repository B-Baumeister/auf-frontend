import { Component, inject, OnInit } from '@angular/core';
import { NewProjectComponent } from '../new-project/new-project.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
/* import {} */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  /* 
  addProject(newProject: {
    position: number;
    Kundenname: string;
    Projektname: string;
    Erstellername: string;
    /*   Erstelldatum: Date;
  }) {
    this['dataSource'].push({
      position: this['dataSource'].length + 1,
      Kundenname: this['dataSource'].Kundenname,
      // Projektname: 'Subtitle #1',
      // Erstellername: 'Luzifer',
      // Erstelldatum: new Date('2023 - 01 - 01'),
    });

    this['table'].renderRows();
  } */
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(NewProjectComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  constructor() {}

  ngOnInit() {}
}
