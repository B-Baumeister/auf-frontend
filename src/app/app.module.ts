import {
  NgModule,
  ChangeDetectionStrategy,
  // provideNativeDateAdapter,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

///////////////////////////////////////

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { NewProjectComponent } from './new-project/new-project.component';

///////////////////////////////////////
/* import {} */

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

///////////////////////////////////////
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TableComponent,
    FormComponent,
    NewProjectComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  // providers: [provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
