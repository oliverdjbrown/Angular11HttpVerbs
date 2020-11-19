import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TodosI } from './../../models/todos/todos.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  todos: TodosI[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
  }

  saveNew(){
    const newTodo = {
      userId: '1',
      id: '201',
      title: 'test',
      completed: true };

    // this.dataSvc.addNewTodo(newTodo).subscribe(todo => console.log(todo));
    this.dataSvc.addNewTodo(newTodo).subscribe(todo => this.todos.push(todo));
  }

}
