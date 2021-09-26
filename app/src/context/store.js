import React, {createContext, useState} from 'react';

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);
    const [inputTask, setInputTask] = useState('');
    console.log(taskList);

    return(
        <TodoContext.Provider
            value={{
                taskList,
                setTaskList,
                inputTask,
                setInputTask
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;