import React, {useContext} from 'react';
import {TodoContext} from '../context/store';

function TaskList(){
  const {todoList, toggleCompleted, clearCompleted, clearAll} = useContext(TodoContext);
  
  return(
      <>
      {
        todoList.map(task => {
          return(
            <button 
              key={task.id} 
              onClick={() => toggleCompleted(task.id)}
              className={`task${task.completed === true ? ' completed' : ''}`}
            >{task.taskName}</button>
          )
        })
      }

      <button onClick={clearCompleted}>clear completed</button>
      <button onClick={clearAll}>clear all</button>
      </>
  )
}

export default TaskList;