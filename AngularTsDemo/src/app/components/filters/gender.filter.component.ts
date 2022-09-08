import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'gender-filter',
  templateUrl:'./gender.filter.component.html'
})
export class GenderFilterComponent {
  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  selectedValue: string = 'all';

  @Output()
  selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.all = 0;
    this.male = 0;
    this.female = 0;
  }

  onSelectionChanged() {
    this.selectionChanged.emit(this.selectedValue);    
  }
}
