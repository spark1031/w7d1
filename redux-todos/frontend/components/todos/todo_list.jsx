import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item';
// module.exports = () => <h3>Todo List goes here!</h3>;

export default ({todos, receiveTodo}) => {
  return (
    <div className='todo-list'>
      <h3>Todo List goes here!</h3>
      <ul>
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};

