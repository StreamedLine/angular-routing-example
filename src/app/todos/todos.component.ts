import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  getTodos(): void {
	this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

}
