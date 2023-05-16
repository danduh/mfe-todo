import { Component, EventEmitter, inject, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoApiService } from "@mfe-todo/data-layer";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'mfe-todo-footer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [TodoApiService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public metadata: WritableSignal<any> = signal({});
  @Input() filterOptions!: any;
  @Input() curFilter!: any;

  @Output() delCompleted = new EventEmitter();
  @Output() filterSelected = new EventEmitter();

  private todoService: TodoApiService

  constructor() {
    this.todoService = inject(TodoApiService)
  }

  ngOnInit() {
    this.todoService.getTodoList().subscribe((resp) => {
      this.metadata.set(resp.metadata)
    })
  }

  public deleteCompleted() {
    this.delCompleted.emit();
  }

  setFilter(filter: string) {
    this.filterSelected.emit(filter);
  }
}
