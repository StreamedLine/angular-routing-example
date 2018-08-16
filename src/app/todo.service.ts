import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo;

  getTodos(): Observable<Todo[]> {
  	return of(TODOS)
  }

  getTodo(id: number): Observable<Todo> {
    return of(TODOS.find(todo => todo.id === id));
  }

  constructor(
  	private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }
}
