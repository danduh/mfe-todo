module.exports = {
  name: 'todo-list',
  exposes: {
    './Module': 'packages/todo-list/src/app/remote-entry/entry.module.ts',
  },
};
