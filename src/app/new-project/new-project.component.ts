import {
  Component,
  ViewChild,
  OnInit,
  // ChangeDetectionStrategy,
} from '@angular/core';
import { /*  FormArray, FormControl, */ NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Schaetzungstable } from '../shared/schaetzungstable.model';
/* import { TableComponent } from '../table/table.component';
 */ @Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProjectComponent implements OnInit {
  /* [x: string]: any; */
  @ViewChild('f') signupForm!: NgForm;

  /* project = {
    Kundenname: '',
    Projektname: '',
    Erstellername: '',
    Erstellerdatum: '',
  }; */
  submitted = false;
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
    /* this.project.Kundenname = this.signupForm.value.userData.kundenName;
    this.project.Projektname = this.signupForm.value.userData.projektName;
    this.project.Erstellername = this.signupForm.value.userData.erstellerName;
    this.project.Erstellerdatum = this.signupForm.value.userData.erstellerDatum;
    
    this.signupForm.reset(); */
    this.dataService.getProjects().subscribe((projects) => {
      const newProject: Schaetzungstable = {
        position: projects.length + 1,
        Kundenname: this.signupForm.value.userData.kundenName,
        Projektname: this.signupForm.value.userData.projektName,
        Erstellername: this.signupForm.value.userData.erstellername,
        Erstelldatum: new Date(this.signupForm.value.userData.erstellerDatum),
      };
      this.dataService.addProject(newProject);
      this.signupForm.reset();
    });
  }
}
