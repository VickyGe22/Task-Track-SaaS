import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title: string = 'Task Track';
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toggleaddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}

//OnInit 和 ngOnInit 方法为 Angular 组件提供了一个清晰的位置来执行初始化逻辑
//OnInit 是一个接口，该接口定义了一个名叫 ngOnInit 的方法。
//当 Angular 创建完组件后，该方法会被立即调用。