import { Component, OnInit } from '@angular/core';

import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-frp-no-synthetic',
  templateUrl: './frp-no-synthetic.component.html',
  styleUrls: ['./frp-no-synthetic.component.css'],
})
export class FrpNoSyntheticComponent implements OnInit {
  constructor() {}

  // テキストボックスに入力された値を保存
  firstTextboxValue: any = '';
  secondTextboxValue: any = '';

  // 入力チェック結果を保存
  isValidInput: boolean = false;

  ngOnInit(): void {
    const firstTextbox = document.getElementById('firstTextbox') as HTMLInputElement;
    const secondTextbox = document.getElementById('secondTextbox') as HTMLInputElement;

    fromEvent(firstTextbox, 'input')
      .pipe(
        map<Event, boolean>((event) => {
          // 入力イベント発生中に入力値チェックを実施
          // クラス変数への書き込み・参照がある
          this.firstTextboxValue = (event.target as any).value;
          return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
        })
      )
      .subscribe((isValid) => {
        // ここでは処理結果を受け取るので、クラス変数への書き込みがあってもOK
        this.isValidInput = isValid;
      });

    fromEvent(secondTextbox, 'input')
      .pipe(
        map<Event, boolean>((event) => {
          // 入力イベント発生中に入力値チェックを実施
          // クラス変数への書き込み・参照がある
          this.secondTextboxValue = (event.target as any).value;
          return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
        })
      )
      .subscribe((isValid) => {
        // ここでは処理結果を受け取るので、クラス変数への書き込みがあってもOK
        this.isValidInput = isValid;
      });
  }
}
