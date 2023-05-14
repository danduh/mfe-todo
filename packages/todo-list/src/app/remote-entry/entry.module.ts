import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';

import { HomeComponent } from "../home/home.component";

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(remoteRoutes),
     HomeComponent],
  providers: [],
})
export class RemoteEntryModule {}
