import React from 'react';
import { Box } from '@mui/material';

import { Header, TodoPanel, TodoList } from './components';

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description:
      'so long task description 3 so long task description so long task description so long task description so long task description',
    checked: true
  }
];

export const App = () => {
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null);
  const [todoList, setTodoList] = React.useState(DEFAULT_TODO_LIST);

  const onEdit = (id: Todo['id']) => {
    setEditTodoId(id);
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      { id: todoList[todoList.length - 1].id + 1, description, name, checked: false }
    ]);
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setEditTodoId(null);
  };

  return (
    <Box marginTop={5} height='100%' display='flex' justifyContent='center' alignContent='center'>
      <Box display='flex' flexDirection='column' width='500px'>
        <Header todoCount={todoList.length} />
        <TodoPanel mode='add' onAddTodo={onAddTodo} />
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </Box>
  );
};
