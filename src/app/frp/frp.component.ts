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

  // FRP型では初期化処理のみ記述

  ngOnInit(): void {
    // テキストボックスオブジェクトを取得
    const firstTextbox = document.getElementById('firstTextbox') as HTMLInputElement;
    const secondTextbox = document.getElementById('secondTextbox') as HTMLInputElement;

    // 2つのテキストボックスのどちらかのイベントが発生した時に、最新のイベントの値を取得
    this.isvalidInput$ = combineLatest([fromEvent(firstTextbox, 'input'), fromEvent(secondTextbox, 'input')]).pipe(
      map<any[], boolean>((events) => {
        // イベントの値から入力値チェックを実施
        return !((events[0].target as any).value === '' || (events[1].target as any).value === '');
      })
    );
  }
}
