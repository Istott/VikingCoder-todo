import React, {createContext, useReducer} from 'react';
import { ADD_TASK, CLEAR_COMPLETED, TOGGLE_COMPLETED, CLEAR_ALL } from "./actions";
import todoReducer from './reducer';

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const initialTodolist = [
        {
            id: 548498416215,
            taskName: 'refactor for the useReducer hook',
            completed: false
        }
    ]

    const [todoList, setDispatch] = useReducer(todoReducer, initialTodolist);

    const addTask = (task) => {
        setDispatch({
            type: ADD_TASK,
            payload: { taskName: task }
        })
    }

    const toggleCompleted = (clickedItemId) => {
        setDispatch({
            type: TOGGLE_COMPLETED,
            payload: clickedItemId
        })
    }

    const clearCompleted = () => {
        const clearSelected = todoList.filter(task => task.completed !== true);
        setDispatch({
            type: CLEAR_COMPLETED,
            payload: clearSelected
        });
    }

    const clearAll = () => setDispatch({type: CLEAR_ALL, payload: []});

    return(
        <TodoContext.Provider
            value={{
                addTask,
                todoList,
                toggleCompleted,
                clearCompleted,
                clearAll
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;