import React from "react";
import { configureStore, createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";



export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const counterSlice = createSlice({
    name: "Cartcounter",
    initialState: {
      count: 0,
    },
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
    },
  });


  const todoSlice = createSlice({
    name: "todo",
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
      builder.addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
    },
  });
  

  const { increment, decrement } = counterSlice.actions;

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      todo: todoSlice.reducer,
    },

  });

  export function useStore() {
    const count = useSelector((state) => state.counter.count);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return {
      state,
      count,
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      Getuser: () => dispatch(fetchTodos())
    };
  }
  
  export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
