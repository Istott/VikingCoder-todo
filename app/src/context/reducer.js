import { ADD_TASK, CLEAR_COMPLETED, TOGGLE_COMPLETED, CLEAR_ALL } from "./actions"

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: Date.now(),
                    taskName: action.payload.taskName,
                    completed: false
                }
            ]
        case TOGGLE_COMPLETED:
            return state.map((item) => {
                if(item.id === action.payload) {
                  return {
                    ...item,
                    completed: !item.completed
                  }
                } else {
                  return item
                }
              })
        case CLEAR_COMPLETED:
            return action.payload
        case CLEAR_ALL:
            return action.payload
        default:
            return state
    }
}

export default todoReducer;