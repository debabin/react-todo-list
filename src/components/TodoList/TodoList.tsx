import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';
import { TodoPanel } from '../TodoPanel/TodoPanel';

interface TodoListProps {
  todoIdForEdit: Todo['id'] | null;
  todos: Todo[];
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  todoIdForEdit,
  changeTodo,
  deleteTodo,
  checkTodo,
  selectTodoIdForEdit
}) => (
  <div>
    {todos.map((todo) => {
      if (todo.id === todoIdForEdit)
        return <TodoPanel mode='edit' changeTodo={changeTodo} editTodo={todo} />;
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
