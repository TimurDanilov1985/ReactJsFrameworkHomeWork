import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkApi) => {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Error')
      }
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

const initialState = {
  todos: [],
  loading: false,
  error: null
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task.completed ? task.completed = false : task.completed = true;
      state.todos.map((todo) => todo.id === action.payload ? todo = task : todo);
    } 
  },
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchTodos.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
          state.loading = false;
          state.todos = action.payload;
        })
        .addCase(fetchTodos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    }
});

export const { fetchTodosFailure, fetchTodosSuccess, fetchTodosRequest, deleteTask, changeStatus } = todosSlice.actions;
export default todosSlice.reducer;