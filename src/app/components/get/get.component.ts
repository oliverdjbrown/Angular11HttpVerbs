import { DataService } from './../../data.service';
import { TodosI } from './../../models/todos/todos.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  // cuando traemos muchos datos
  todos: TodosI[] = [];
  // cuando traemos un solo dato
  todo: any;
  key = 200;

  constructor(private dataSvc: DataService) { }


  getTodos(): void {
    this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
  }
  getTodo(): void {
    this.dataSvc.GetTodo(this.key).subscribe(data => (this.todo = data));
  }

  ngOnInit(): void {
    this.getTodos();
    // this.getTodo();
  }

}
