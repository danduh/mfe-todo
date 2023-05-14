import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'mfe-todo-todo-list-entry',
  template: `
    <mfe-todo-home></mfe-todo-home>`,
  imports: [HomeComponent],
  standalone: true
})
export class RemoteEntryComponent {
}
