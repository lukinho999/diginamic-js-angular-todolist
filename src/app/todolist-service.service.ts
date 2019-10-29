import { Injectable } from '@angular/core';
import { Todos, TodoModel } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistServiceService {
  public todolist: Todos=[]; 

  constructor() {
    
   }
  getAll(){
    return this.todolist
  }
  get(id : number){
    for(let todo of this.todolist){
      if (id == todo.id){
        return todo;
      }
    }
  }
  getNewId(){
    let max=0;
    for(let todo of this.todolist){
      if (todo.id>max){
        max= todo.id;
      }
    }
    return max+1;
    
  }
  add(todo : TodoModel){
    this.todolist.push(todo);
  }
  edit(todo : TodoModel){
    this.get(todo.id)

  }
  delete(id : number){
    this.todolist = this.todolist.filter(t => t.id != id);

  }
}
