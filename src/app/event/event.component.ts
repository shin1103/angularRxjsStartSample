import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // イベント型では初期化処理を必要としない
  }

  // テキストボックスに入力された値を保存
  firstTextboxValue: any = '';
  secondTextboxValue: any = '';

  inputFirstTextbox(event: any) {
    // 入力イベントを受け取り、テキストの値を保存
    this.firstTextboxValue = event.target.value;
    // 入力チェックを実施
    this.isValidInput();
  }

  inputSecondTextbox(event: any) {
    // 入力イベントを受け取り、テキストの値を保存
    this.secondTextboxValue = event.target.value;
    // 入力チェックを実施
    this.isValidInput();
  }

  isValidInput(): boolean {
    // 入力チェックを実施
    return !(this.firstTextboxValue === '' || this.secondTextboxValue === '');
  }
}
