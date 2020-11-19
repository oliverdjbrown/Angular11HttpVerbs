import { JsonPipe } from '@angular/common';
import { TodosI } from './../../models/todos/todos.interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  todos: TodosI[] = [];
  key = 200;

  constructor(private dataSvc: DataService) { }


  getTodos(){
    this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
  }
  getTodo(){
    this.dataSvc.GetTodo(this.key).subscribe(data => (this.todos = data));
  }

  ngOnInit(): void {
    // this.dataSvc.GetTodos().subscribe(data => console.log(data));
      this.dataSvc.GetTodo(this.key).subscribe(data => console.log(data));
    // this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
      this.dataSvc.GetTodo(this.key).subscribe(data => (this.todos = data));
  }

}
