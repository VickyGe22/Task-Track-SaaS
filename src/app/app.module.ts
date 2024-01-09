import { NgModule } from '@angular/core'; //用来定义模块的元数据。
import { BrowserModule } from '@angular/platform-browser'; //Angular 应用都运行在浏览器中，所以需要导入 BrowserModule。
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //导入了根组件 AppComponent。
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //FormsModule确实是Angular的内部部分，专为处理Angular应用程序中的表单而设计。当您从@angular/forms导入FormsModule时，您将引入Angular的内置功能，用于处理表单输入、验证和其他与表单相关的行为。
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes=[
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
] //定义了路由，即指定了 URL 与组件的对应关系。


//列出了属于该 NgModule 的组件、指令和管道。
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtomComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  //声明模块中属于该模块的组件、指令等。
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) 
  ],
  //导入其他模块，这些模块中的组件、指令等可以在该模块中使用
  providers: [], //定义了应用中的服务提供者
  bootstrap: [AppComponent]
})

export class AppModule { }
//export 是 TypeScript 和 ES6 中的一个关键字，用来导出模块中的某些内容，以便其它模块可以使用它们。
//export 使得 AppModule 类可以在其他文件中被导入和使用

//总的来说，@NgModule 提供了一种方式来组织和管理 Angular 应用的各个部分，
//并通过 export 关键字使得模块中的类和其他实体可以在应用的其他部分中被重用。



// 双向数据绑定：使用作为FormsModule一部分的ngModel指令
// 您可以为表单输入实现双向数据绑定。
// 这允许在TypeScript代码中的表单模型和视图（模板中的表单字段）之间自动同步数据。
// 表单验证：FormsModule支持各种验证功能。
// 您可以使用required、minlength、maxlength和pattern等内置验证指令来强制执行输入规则。

// 表单提交和处理：它有助于处理表单提交和检索表单值。
// 表单控件分组：它有助于将多个表单控件分组为称为FormGroup的单个单元。这对于管理复杂的表单很有用。