//house action creators and action type constants
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

//lets reducer know to reset list of todos
//todos argument is an Array
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

//argument: single todo
export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});
