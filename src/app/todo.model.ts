export class TodoModel {

    constructor(public id:number, public label:string){

    }
}
export type Todos = Array<TodoModel>;