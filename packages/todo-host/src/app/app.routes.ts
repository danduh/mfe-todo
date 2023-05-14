import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import {
  startsWith,
  WebComponentWrapper, WebComponentWrapperOptions
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: 'todo-ng',
    loadChildren: () =>
      loadRemoteModule('todo-ng', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path:"todo-rc",
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4302/remoteEntry.js',
      remoteName: 'todo-rc',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
