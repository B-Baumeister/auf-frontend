import { Injectable } from '@angular/core';
import { Schaetzungstable } from './shared/schaetzungstable.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  /////////////Variablenname: Typdefinition[] = [Daten]
  private ELEMENT_DATA: Schaetzungstable[] = [
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

  private dataSource = [...this.ELEMENT_DATA];

  getProjects(): Schaetzungstable[] {
    return this.dataSource;
  }

  addProject(newProject: {
    position: number;
    Kundenname: string;
    Projektname: string;
    Erstellername: string;
    Erstelldatum: Date;
  }) {
    this.dataSource.push(newProject);
  }
}
