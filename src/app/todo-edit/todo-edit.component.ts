import { Component, OnInit } from '@angular/core';
import { Todos, TodoModel } from '../todo.model';
import { TodolistServiceService } from '../todolist-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo:TodoModel;

  constructor(private todolistservice:TodolistServiceService, private router:Router, private route: ActivatedRoute) { }
  

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id==null) {
      this.todo= new TodoModel(0, '');
      
      
    } else {
      this.todo= this.todolistservice.get(Number(id));
      
    }
  }
  addTodo(){
    if(this.todo.id==0){
      this.todo.id= this.todolistservice.getNewId();
      this.todolistservice.add(this.todo);

    }else{
      this.todolistservice.edit(this.todo);
    }
    console.log(this.todo)
    console.log(this.todolistservice.todolist)
    this.router.navigate(['/list']);
    }

  }


