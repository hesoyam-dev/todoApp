import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { ArchivedTodosPage } from '../archived-todos/archived-todos'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  public archivedTodosPage = ArchivedTodosPage;
  public checkedTodo = false;
  public currentDate = this.getMonthInYear((new Date()).getMonth()) + " " +this.datepipe.transform(new Date(), 'dd');

  constructor(private toastController: ToastController, public datepipe: DatePipe, private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getTodos();
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: 'Add a Todo',
      message: 'Enter your Todo',
      inputs: [
        {
          type: 'text',
          name: 'addTodoInput'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);
            addTodoAlert.onDidDismiss(()=> {
              let addTodoToast = this.toastController.create({
                message: "Todo " + "'" + todoText + "'" + " added",
                duration: 2000
              });
              addTodoToast.present();
            });
          }
        }
      ]
    });
    addTodoAlert.present();
  }

  editTodoAlert(todoIndex){
    let editTodoAlert = this.alertController.create({
      title: 'Edit your Todo',
      message: '',
      inputs: [
        {
          type: 'text',
          name: 'addTodoInput',
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todos[todoIndex] = todoText;
            editTodoAlert.onDidDismiss(()=> {
              let editTodoToast = this.toastController.create({
                message: "Todo " + "'" + todoText + "'" + " updated",
                duration: 2000
              });
              editTodoToast.present();
            });
          }
        }
      ]
    });
    editTodoAlert.present();
  }

  itemReordered($event){
    reorderArray(this.todos, $event)
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  checked(){
    this.checkedTodo = !this.checkedTodo
  }

  getMonthInYear(month) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month]
  }

  archivedTodo(todoIndex){
    this.todoProvider.archiveTodo(todoIndex);
  }
}
