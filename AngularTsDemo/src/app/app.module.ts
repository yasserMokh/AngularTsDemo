import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee.list.component';

import { GenderFilterComponent } from './components/filters/gender.filter.component';

import { GenderTitlePipe } from './pipes/genderTitle.pipe';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/error/notFound.component';
import { AppMenuComponent } from './components/menu/appMenu.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, GenderFilterComponent, GenderTitlePipe, HomeComponent, NotFoundComponent, AppMenuComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
