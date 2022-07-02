import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: Todo['id'] | null;
  addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  deleteTodo: (todoId: Todo['id']) => void;
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  checkTodo: (todoId: Todo['id']) => void;
  selectTodoIdForEdit: (todoId: Todo['id']) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  addTodo: () => {},
  deleteTodo: () => {},
  changeTodo: () => {},
  checkTodo: () => {},
  selectTodoIdForEdit: () => {}
});
