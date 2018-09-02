import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private archivedTodos = [];

  constructor(private toastController: ToastController, public http: HttpClient) {
    // console.log('Hello TodoProvider Provider');
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  archiveTodo(todoIndex){
    let archivedTodo = this.todos[todoIndex];
    this.archivedTodos.push(archivedTodo);
    this.todos.splice(todoIndex, 1);
    let archivedTodoToast = this.toastController.create({
      message: "Todo " + "'" + archivedTodo + "'" + " archived",
      duration: 2000
    });
    archivedTodoToast.present();
  }

  getAllArchivedTodos(){
    return this.archivedTodos;
  }

}
