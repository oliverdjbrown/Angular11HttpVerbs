import { TodosI } from './models/todos/todos.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  GetTodos(): Observable<TodosI[]>{
    return this.http.get<TodosI[]>(this.urlAPI);
  }

  GetTodo(id: number): Observable<TodosI>{
    return this.http.get<TodosI>(this.urlAPI + '/' + id);
  }

  addNewTodo(todo: TodosI): Observable<TodosI> {
    return this.http.post<TodosI>(this.urlAPI, todo);
  }
}
