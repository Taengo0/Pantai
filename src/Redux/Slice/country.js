import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action
export const fetchCountry = createAsyncThunk("fetchCountry", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default todoSlice.reducer;
