import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe-todo-task-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent {
  @Output() doAdd = new EventEmitter();

  addNewTodo(name: string) {
    if(name) {
      this.doAdd.emit(name);
    }

  }
}
