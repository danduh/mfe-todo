import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfe-todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ]
})
export class TaskComponent {
  @ViewChild('editInput') editInput!: ElementRef;

  @Input({ required: true }) singleTodo!: any;

  @Output() doComplete = new EventEmitter();
  @Output() doEdit = new EventEmitter();
  @Output() doRemove = new EventEmitter();

  public isEdit = false;
  public isHovered = true;

  completeToggle() {
    this.doComplete.emit(this.singleTodo);
  }

  editName() {
    this.isEdit = false;
    this.doEdit.emit(this.singleTodo);
  }

  removeSingleTodo() {
    this.doRemove.emit(this.singleTodo.id);
  }

  setFocus() {
    this.editInput.nativeElement.focus();
  }
}
