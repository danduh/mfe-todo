module.exports = {
  name: 'todo-stats',
  exposes: {
    './Module': 'packages/todo-stats/src/app/remote-entry/entry.module.ts',
  },
};
