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

  updateTodo(id: string, todo: TodosI): Observable<TodosI> {
    return this.http.put<TodosI>(this.urlAPI + '/' + id, todo);
    // return this.http.put<TodosI>(this.urlAPI, todo);
  }

  deleteTodo(id: string): Observable<{}>{
    // this.urlAPI = `${this.urlAPI}/${id}`;
    return this.http.delete(this.urlAPI + '/' + id);
    // return this.http.delete(this.urlAPI);
  }
}
