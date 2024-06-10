import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getReceipts = createAsyncThunk("receipt/getReceipt", async () => {
  const response = await fetch(
    "https://bck-server.onrender.com/api/loans/application",
    { credentials: "include" }
  );
  let receipts = await response.json();
  return receipts;
});

const receiptSlice = createSlice({
  name: "receipts",
  initialState: { data: [], isLoading: false },
  extraReducers: (builder) => {
    builder.addCase(getReceipts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReceipts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getReceipts.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export default receiptSlice.reducer;
