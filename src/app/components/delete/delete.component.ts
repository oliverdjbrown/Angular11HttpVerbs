import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { TodosI } from 'src/app/models/todos/todos.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  todos: TodosI[] = [];
  id = '200';

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.GetTodos().subscribe(data => (this.todos = data));
  }

  onDeleteTodo(): void{
    const myTodo = {
      userId: '1',
      id: '200',
      title: 'test',
      completed: true };
    this.dataSvc.deleteTodo(myTodo.id).subscribe();
    this.todos = this.todos.filter(t => t.id != myTodo.id);
  }
}
