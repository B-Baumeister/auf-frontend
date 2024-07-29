import { Injectable } from '@angular/core';
import { Schaetzungstable } from './shared/schaetzungstable.model';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /*   constructor() {} */
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
  ];

  private dataSource = new BehaviorSubject<Schaetzungstable[]>(
    this.ELEMENT_DATA
  ); /* [...this.ELEMENT_DATA]; */

  getProjects(): Observable<Schaetzungstable[]> {
    return this.dataSource.asObservable();
  }

  addProject(newProject: Schaetzungstable) {
    const currentData = this.dataSource.value;
    this.dataSource.next([...currentData, newProject]);

    /*  position: number;
    Kundenname: string;
    Projektname: string;
    Erstellername: string;
    Erstelldatum: Date; */
  } /* {
    this.dataSource.push(newProject);
  } */
}
