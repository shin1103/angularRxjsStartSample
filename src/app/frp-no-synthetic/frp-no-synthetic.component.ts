import { Component, OnInit } from '@angular/core';

import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-frp-no-synthetic',
  templateUrl: './frp-no-synthetic.component.html',
  styleUrls: ['./frp-no-synthetic.component.css'],
})
export class FrpNoSyntheticComponent implements OnInit {
  constructor() {}

  firstTextboxValue: any = '';
  secondTextboxValue: any = '';

  isValidInput: boolean = false;

  ngOnInit(): void {
    const firstTextbox = document.getElementById('firstTextbox') as HTMLInputElement;
    const secondTextbox = document.getElementById('secondTextbox') as HTMLInputElement;

    fromEvent(firstTextbox, 'input')
      .pipe(
        map<Event, boolean>((event) => {
          this.firstTextboxValue = (event.target as any).value;
          return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
        })
      )
      .subscribe((isValid) => {
        this.isValidInput = isValid;
      });

    fromEvent(secondTextbox, 'input')
      .pipe(
        map<Event, boolean>((event) => {
          this.secondTextboxValue = (event.target as any).value;
          return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
        })
      )
      .subscribe((isValid) => {
        this.isValidInput = isValid;
      });
  }
}
