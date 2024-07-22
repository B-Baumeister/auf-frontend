import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
/* import {} */
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TableComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
