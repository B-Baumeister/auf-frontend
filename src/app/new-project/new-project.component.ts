import {
  Component,
  ViewChild,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormArray, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProjectComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;
  Kundenname = '';
  Projektname = '';
  Erstellername = '';
  Erstellerdatum = '';

  project = {
    Kundenname: '',
    Projektname: '',
    Erstellername: '',
    Erstellerdatum: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.project.Kundenname = this.signupForm.value.userData.kundenName;
    this.project.Projektname = this.signupForm.value.userData.projektName;
    this.project.Erstellername = this.signupForm.value.userData.erstellerName;
    this.project.Erstellerdatum = this.signupForm.value.userData.erstellerDatum;
    this.signupForm.reset();
  }
  constructor() {}

  ngOnInit() {}

  
}
