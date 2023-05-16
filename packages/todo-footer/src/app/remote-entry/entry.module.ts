import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { FooterComponent } from "../footer/footer.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), FooterComponent],
  providers: [],
})
export class RemoteEntryModule {
}
