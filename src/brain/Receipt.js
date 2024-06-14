import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getReceipts = createAsyncThunk("receipt/getReceipt", async () => {
  const response = await fetch(
    "https://bck-server.onrender.com/api/loans/application",
    {
      credentials: "include",
    }
  );
  let receipts = await response.json();
  return receipts.payments;
});

const receiptSlice = createSlice({
  name: "receipts",
  initialState: { data: [], isLoading: false },
  reducers: {
    approveHandler: (state, action) => {
      let { id } = action.payload;
      state.data = state.data.map((receipt) =>
        receipt.id === id
          ? {
              ...receipt,
              isApproved: (receipt.isApproved = !receipt.isApproved),
            }
          : receipt
      );
    },
  },
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
export const { approveHandler } = receiptSlice.actions;
