import { Component, OnInit } from '@angular/core';

import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-frp-no-synthetic',
  templateUrl: './frp-no-synthetic.component.html',
  styleUrls: ['./frp-no-synthetic.component.css'],
})
export class FrpNoSyntheticComponent implements OnInit {
  constructor() {}

  firstTextboxValue: any = '';
  secondTextboxValue: any = '';

  ngOnInit(): void {
    const firstTextbox = document.getElementById('firstTextbox') as HTMLInputElement;
    const secondTextbox = document.getElementById('secondTextbox') as HTMLInputElement;

    fromEvent(firstTextbox, 'input').subscribe((event) => {
      this.firstTextboxValue = (event.target as any).value;
    });

    fromEvent(secondTextbox, 'input').subscribe((event) => {
      this.secondTextboxValue = (event.target as any).value;
    });
  }

  isValidInput(): boolean {
    return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
  }
}
