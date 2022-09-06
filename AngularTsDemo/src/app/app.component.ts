import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'AngularTS Demo';
  imgPath: string = 'https://api.freelogodesign.org/assets/thumb/logo/5072150_400.png?t=637946206510000000';
  btnDisabled: boolean = false;

  firstName: string = 'Tim';
  lastName: string = 'Collins';

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
