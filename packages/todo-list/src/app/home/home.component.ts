import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from "@angular/common";
import { TaskComponent, TaskInputComponent, Todo } from "@mfe-todo/todo-ui";
import { Observable } from "rxjs";
import { TodoService } from "../todo.service";
import { HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'mfe-todo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TodoService],
  imports: [AsyncPipe, TaskComponent, CommonModule, TaskInputComponent, HttpClientModule],
  standalone: true,
})
export class HomeComponent {
  public todoList!: Observable<Todo[]>;
  public curFilter!: Observable<unknown>;
  public metadata!: any;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoList = this.todoService.getTodoList().pipe(
      map((resp) => {
        return resp.todos
      })
    )

    // this.curFilter = this.store
    //   .pipe(
    //     select('filter')
    //   );
    //
    // this.todoList = this.store
    //   .pipe(
    //     select(todosListSelector),
    //   );
    //
    // this.metadata = this.store
    //   .pipe(
    //     select(metadataSelector),
    //   );
  }

  updateCurFilter(filter: any) {
    this.todoList = this.todoService.getTodoList({ payload: filter })
    // this.store.dispatch(FilterActions.updateFilter({payload: filter}));
  }

  addTodo(newTodoVal: string) {
    const todo = {
      name: newTodoVal,
      completed: false
    };
    // this.store.dispatch(TodoActions.addTodo({payload: todo}));
  }

  removeTodo(id: number): void {
    // this.store.dispatch(TodoActions.removeTodo({payload: id}));
  }


  editTodo(todo: any): void {
    if(todo?.name) {
      // this.store.dispatch(TodoActions.updateTodo({payload: todo}));
    } else {
      this.removeTodo(todo.id);
    }
  }


  completeToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    // this.store.dispatch(TodoActions.updateTodo({payload: todo}));
  }

  //@Permissions('todos_deletemany')
  clearCompleted(): void {
    // this.store.dispatch(TodoActions.removeCompletedTodos());
  }
}
