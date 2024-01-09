import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {

  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter(); //创建了一个名为 btnClick 的 EventEmitter 实例

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit(); //调用触发事件。每当按钮被点击时，onClick 方法就会被执行，并触发 btnClick 事件
  }

}


//EventEmitter 是一种特殊的对象
// 用于在组件或指令之间进行事件驱动的通信
// 它是基于 RxJS 的 Subject 类实现的
// 允许一个组件或服务发出事件
// 而其他组件或服务可以订阅这些事件并作出响应。
// EventEmitter 主要用于自定义事件的创建和发射。