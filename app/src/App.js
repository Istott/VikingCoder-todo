import React from 'react';
import './App.css';

import TodoProvider from './context/store';

import InputTask from './components/inputTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Honey-do List</h1>
        <TodoProvider>
          <InputTask />
          <TaskList />
        </TodoProvider>
      </main>
    </div>
  );
}

export default App;
