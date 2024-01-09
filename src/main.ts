import { enableProdMode } from '@angular/core'; //enableProdMode 用于关闭 Angular 的开发模式。在开发模式下，Angular 会做额外的检查，比如变更检测，来帮助开发者，但这会减慢应用速度。在生产模式下，这些检查被禁用，以提高性能
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //platformBrowserDynamic 是一个用于启动客户端应用的平台。它使用浏览器中的文档对象模型（DOM）来渲染应用。它还提供了一些额外的服务，比如动画。

import { AppModule } from './app/app.module'; 
//应用的根模块 AppModule。
// 在 Angular 中，模块是组织应用结构和功能的方式。
// AppModule 是应用的主模块，它定义了应用的启动方式和顶级依赖
// 调用app.module.ts中的AppModule类

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//这段代码检查 environment 对象中的 production 属性。
//如果应用正在生产环境中运行（production 为 true），则调用 enableProdMode() 来启用生产模式，以提高应用性能

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //bootstrapModule
// 作用：bootstrapModule 是一个方法，用于启动或“引导”Angular应用程序。
// 它负责初始化运行 Angular 应用所需的运行时环境，并启动应用的根模块。
// 参数：此方法接受一个参数，即 Angular 模块，
// 这个模块通常是应用程序的根模块。
// 在您的代码中，AppModule 是作为参数传递给 bootstrapModule 的，表明它是应用程序的根模块。