import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";



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

  const { increment, decrement } = counterSlice.actions;

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });

  export function useStore() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return {
      count,
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
    };
  }
  
  export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
