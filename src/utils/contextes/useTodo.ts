import React from 'react';

import { TodoContext } from './TodoContext';

export const useStore = () => React.useContext(TodoContext);
