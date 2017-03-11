import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import TodoIndex from './components/todos_index.js';
import TodoNew from './components/todo_new.js';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={TodoIndex}/>
    <Route path='todo-new' component={TodoNew}/>
  </Route>
)
