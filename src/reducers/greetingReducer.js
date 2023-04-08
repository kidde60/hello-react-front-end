import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GreetingUrl = 'http://localhost:3000/api/v1/messages'
const Method = '/get/messages';
const initialState = {};

export const GreetingsThunk = createAsyncThunk(Method, async () => {
  const greeting = await (await fetch(`${GreetingUrl}`)).json();
  return greeting;
});

const GreetingSlice = createSlice({
    name: 'Greetings',
    initialState,
    reducers: {},
    extraReducers: {
      [GreetingsThunk.fulfilled]: (state, action) => {
        const { payload } = action;
        return {
          ...payload,
        };
      },
    },
  });

  export default GreetingSlice.reducer;