import { Component } from '@angular/core'; //Component 是一个装饰器函数，用于为该组件指定 Angular 所需的元数据。

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//selector 是一个 CSS 选择器，它告诉 Angular 在父级 HTML 中查找 <app-root> 标签，然后创建该组件，并插入此标签中。
//templateUrl 是组件模板文件的位置。
//styleUrls 是组件私有 CSS 样式表文件的位置。

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
