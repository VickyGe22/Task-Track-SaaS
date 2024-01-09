import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Task } from '../Task';
// import { TASKS } from '../mock-task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
//它的作用：这部分设置了应用程序如何与服务器对话的“规则”。这就像告诉服务器：“嘿，我要以JSON格式向您发送信息。”
//预期结果：服务器知道期待JSON格式的数据，这是在网络上发送和接收数据的常见格式。


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:4000/tasks';

  constructor(private http:HttpClient) { }

  // getTasks(): Observable<Task[]> {
  //   const task = of(TASKS);
  //   return task;
  // }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`; //生成后端网页数据所在的url
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); //put方法用于更新数据:将更新的任务发送到服务器。当您想更新服务器上已经存在的东西时，会使用put方法。该函数按照之前设置的规则（httpOptions）将任务发送到它构建的特定地址（url）。
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
