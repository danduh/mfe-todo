// import { setRemoteDefinitions } from '@nrwl/angular/mf';
//
// fetch('/assets/module-federation.manifest.json')
//   .then((res) => res.json())
//   .then((definitions) => setRemoteDefinitions(definitions))
//   .then(() => import('./bootstrap').catch((err) => console.error(err)));
//
//
// main.ts
import { loadRemoteEntry } from '@angular-architects/module-federation';
import {
  LoadRemoteEntryScriptOptions
} from "@angular-architects/module-federation-runtime/lib/loader/dynamic-federation";

Promise.all([
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4301/remoteEntry.mjs', remoteName: 'ngTodo'} as any),
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4302/remoteEntry.js'})
  // loadRemoteEntry({ type: 'module', remoteEntry: 'https://brave-glacier-0ffc18c10.azurestaticapps.net/remoteEntry.js'})
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
