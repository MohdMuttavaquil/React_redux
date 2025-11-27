import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Step 1: Create async thunk
export const fetchCatFact = createAsyncThunk("catFact/fetchFact", async () => {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data.fact;
});

// Step 2: Create slice
const factSlice = createSlice({
  name: "catFact",
  initialState: {
    value: "",
    loading: false,
    error: null,
  },
  reducers: {},

  // Step 3: Handle async states
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatFact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatFact.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchCatFact.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch cat fact.";
      });
  },
});

export default factSlice.reducer;
