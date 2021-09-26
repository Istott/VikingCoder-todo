import React, {useContext} from 'react';
import {TodoContext} from '../context/store';

function TaskList(){
  const {taskList, setTaskList} = useContext(TodoContext);

  const toggleCompleted = (clickedTaskId) => {
      const newList = taskList.map((item) => {
        if(item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
      setTaskList(newList);
    }

    const clearCompleted = () => {
      const clearSelected = taskList.filter(task => task.completed !== true);
      setTaskList(clearSelected);
    }
  
  return(
      <>
      {
        taskList.map(task => {
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
      <button onClick={() => setTaskList([])}>clear all</button>
      </>
  )
}

export default TaskList;