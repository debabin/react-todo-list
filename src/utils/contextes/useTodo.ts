import React from 'react';

import { TodoContext } from './TodoContext';

export const useTodo = () => React.useContext(TodoContext);
