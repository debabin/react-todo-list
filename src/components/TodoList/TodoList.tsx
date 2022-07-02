import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';
import { TodoPanel } from '../TodoPanel/TodoPanel';
import { useTodo } from '../../utils';

export const TodoList: React.FC = () => {
  const { todos, todoIdForEdit, deleteTodo, checkTodo, selectTodoIdForEdit } = useTodo();

  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit) return <TodoPanel mode='edit' editTodo={todo} />;
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};
