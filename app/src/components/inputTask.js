import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/store';

function InputTask(){
    const { addTask } = useContext(TodoContext);
    const [inputTask, setInputTask] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        addTask(inputTask);
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