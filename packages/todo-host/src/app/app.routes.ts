import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo-stats',
    loadChildren: () =>
      import('todo-stats/Module').then((m) => m.RemoteEntryModule)

  },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('todo-list/Module').then((m) => m.RemoteEntryModule),
    outlet: 'primary'
  },
  {
    path: 'todo-footer',
    loadChildren: () =>
      import('todo-footer/Module').then((m) => m.RemoteEntryModule),
    outlet: 'footerPlace'
  },
];
