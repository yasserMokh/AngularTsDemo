import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee.list.component';

import { GenderFilterComponent } from './filters/gender.filter.component';

import { GenderTitlePipe } from './pipes/genderTitle.pipe';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, GenderFilterComponent, GenderTitlePipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
