import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  firstTextboxValue: any = '';
  secondTextboxValue: any = '';

  inputFirstTextbox(event: any) {
    this.firstTextboxValue = event.target.value;
    this.isValidInput();
  }

  inputSecondTextbox(event: any) {
    this.secondTextboxValue = event.target.value;
    this.isValidInput();
  }

  isValidInput(): boolean {
    return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
  }
}
