import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'mfe-todo-todo-footer-entry',
  template: `
    <mfe-todo-footer></mfe-todo-footer>`,
  imports: [
    FooterComponent
  ],
  standalone: true
})
export class RemoteEntryComponent {
}
