import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/store';



function TaskList(){
  const {todoList, toggleCompleted, clearCompleted, clearAll} = useContext(TodoContext);

  const color = ['#FFBA08', '#FAA307', '#F48C06', '#E85D04', '#DC2F02', '#D00000', '#9D0208', '#6A040F', '#370617', '#03071E'];
  let x = 0;

  const colorFunc= () => {
    x = x + 1

    if (x > color.length - 1) {
      x = 0
      return x
    }
  }
  
  return(
      <>
      {
        todoList.map(task => {
          colorFunc()
          return(
            <button 
              key={task.id} 
              onClick={() => toggleCompleted(task.id)}
              className={`task${task.completed === true ? ' completed' : ''}`}
              style={{color: `${color[x]}`}}
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