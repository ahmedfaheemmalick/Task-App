import { createSlice, configureStore } from '@reduxjs/toolkit'
import Tasks from "./data"

const taskSlice = createSlice({
    name: 'Task',
    initialState: Tasks,
    reducers: {
        archiveTask(state, action) {
            return state.map((task) => task.id === action.payload ? { ...task, state: 'TASK_ARCHIVED' } : task)
        },
        pinTask(state, action) {
            return state.map((task) => task.id === action.payload ? { ...task, state: 'TASK_PINNED' } : task)
        }
    },
})

export const store = configureStore({ reducer: taskSlice.reducer });

export const { archiveTask, pinTask } = taskSlice.actions
export default taskSlice.reducer