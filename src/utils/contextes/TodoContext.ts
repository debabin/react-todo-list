import React from 'react';

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (todoId: Todo['id']) => void;
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
  checkTodo: (todoId: Todo['id']) => void;
  selectTodoIdForEdit: (todoId: Todo['id']) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  changeTodo: () => {},
  checkTodo: () => {},
  selectTodoIdForEdit: () => {}
});
