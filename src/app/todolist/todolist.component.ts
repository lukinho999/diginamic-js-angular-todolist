import { Component, OnInit } from '@angular/core';
import { Todos } from '../todo.model';
import { TodolistServiceService } from '../todolist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist:Todos;


  constructor(private todolistService:TodolistServiceService, private router: Router) { }

  ngOnInit() {
    this.todolist=this.todolistService.getAll();
  }
 editTodo(id){
    this.router.navigate(['edit', id])
  }
  deleteTodo(id){
    this.todolistService.delete(id);
    this.todolist = this.todolistService.getAll();

  }

}
