import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const ROUTES: Routes = [
  { path: 'list', component: TodolistComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'add', component: TodoEditComponent},
  { path: 'edit/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
