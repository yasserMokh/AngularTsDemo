import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/error/notFound.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee.list.component';

import { GenderFilterComponent } from './components/filters/gender.filter.component';

import { GenderTitlePipe } from './pipes/genderTitle.pipe';


import { AppMenuComponent } from './components/menu/appMenu.component';

import { EmployeeService } from './services/employee.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, GenderFilterComponent, GenderTitlePipe, HomeComponent, NotFoundComponent, AppMenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
