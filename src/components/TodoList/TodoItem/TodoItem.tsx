import React from 'react';
import { IconButton, Box, Paper, Typography } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

import type { Todo } from '../../../App';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
  onEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onCheckTodo, onEdit }) => (
  <Paper
    elevation={1}
    sx={{
      marginBottom: '15px',
      width: '100%',
      padding: '15px 20px',
      borderRadius: 1,
      gap: 2,
      opacity: todo.checked ? 0.5 : 1
    }}
  >
    <Box textAlign='left'>
      <Typography
        onClick={() => onCheckTodo(todo.id)}
        sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
        variant='h5'
        component='h5'
        gutterBottom
      >
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div' gutterBottom>
        {todo.description}
      </Typography>
    </Box>
    <Box display='flex' justifyContent='flex-end'>
      <IconButton onClick={() => onEdit(todo.id)} color='primary' aria-label='edit'>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => onDeleteTodo(todo.id)} color='error' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
);
