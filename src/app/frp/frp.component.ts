import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-frp',
  templateUrl: './frp.component.html',
  styleUrls: ['./frp.component.css'],
})
export class FrpComponent implements OnInit {
  isvalidInput$: Observable<boolean> = new Observable();

  constructor() {}

  ngOnInit(): void {
    const firstTextbox = document.getElementById('firstTextbox') as HTMLInputElement;
    const secondTextbox = document.getElementById('secondTextbox') as HTMLInputElement;

    this.isvalidInput$ = combineLatest([fromEvent(firstTextbox, 'input'), fromEvent(secondTextbox, 'input')]).pipe(
      map<any[], boolean>((events) => {
        return !((events[0].target as any).value === '' || (events[1].target as any).value === '');
      })
    );
  }
}
