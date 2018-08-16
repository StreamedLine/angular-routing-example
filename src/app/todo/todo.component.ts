import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todo';
import { TodoService }  from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo;

  constructor(
  	private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo()
  }
  
  getTodo(): void {
    this.route.params.subscribe(
      params => {
        let id= +params['id'];
        this.todoService.getTodo(id)
        .subscribe(todo => this.todo = todo);
    });      
  }
}
