import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registeredList: string[] = [
    'Cosme Fulanito',
    'Json Derulo',
    'Mirtha Legrand',
  ];
  maxCapacity: number;

  addName(fullname: string) {
    this.registeredList.push(fullname);
  }

  ngOnInit(): void {
    this.maxCapacity = this.registeredList.length + 1;
  }
}
