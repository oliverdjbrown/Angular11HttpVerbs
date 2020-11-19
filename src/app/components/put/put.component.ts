import { DataService } from 'src/app/data.service';
import { Component, OnInit } from '@angular/core';
import { TodosI } from 'src/app/models/todos/todos.interface';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
  todos: TodosI[] = [];
  id = '200';

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
  }

  OnUpdateTodo(): void {
    const myTodo = {
      userId: '1',
      id: '200',
      title: 'test',
      completed: true };

    this.dataSvc.updateTodo(this.id, myTodo).subscribe(todo => {
      // const indexToUpdate = this.id ? this.todos.findIndex( t => t.id === todo.id) : -1;
      // if (indexToUpdate > -1){
      //   this.todos[indexToUpdate] = todo;
      // }
      const indexToUpdate = this.id ? this.todos.findIndex( t => t.id === todo.id) : -1;
      if (indexToUpdate > -1){
        this.todos[indexToUpdate] = todo;
      }
    });
  }
}
