import React, {useContext} from 'react';
import {TodoContext} from '../context/store';

function InputTask(){
    const {taskList, setTaskList, inputTask, setInputTask} = useContext(TodoContext);
    
    function handleSubmit(e) {
        e.preventDefault();
    
        const newTask = [
          ...taskList, 
          {
            id: Date.now(),
            taskName: inputTask,
            completed: false
          }
        ]
        setTaskList(newTask);
        setInputTask('');
    }
    return(
        <>
            <form>
                <input 
                    type='text'
                    placeholder='name task here'
                    onChange={(e) => setInputTask(e.target.value)}
                    value={inputTask}
                />
                <button
                    onClick={handleSubmit}
                >submit</button>
            </form>
        </>
    )
}

export default InputTask;