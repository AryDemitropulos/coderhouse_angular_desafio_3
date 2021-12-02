import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-list',
  templateUrl: './registered-list.component.html',
  styleUrls: ['./registered-list.component.css'],
})
export class RegisteredListComponent implements OnInit {
  @Input() registeredList: string[];
  @Input() maxCapacity: number;
  constructor() {}

  ngOnInit(): void {}
}
