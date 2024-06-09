import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLoansApplication = createAsyncThunk(
  "loans/getApplication",
  async () => {
    let loans = await fetch("https://bck-server.onrender.com/api/loans/application", {
      credentials: "include",
    });
    let loansData = await loans.json();
    return loansData.allLoanApplication;
  }
);
// https://bck-server.onrender.com

const loansSlice = createSlice({
  name: "loans",
  initialState: {
    data: [],
    isLoading: true,
  },
  reducers: {
    updateStatus: (state, action) => {
      let { id } = action.payload;
      state.data = state.data.map((loan) =>
        loan.id == id
          ? {
              ...loan,
              status: (loan.status = "Approved"),
            }
          : loan
      );
    },
    rejectStatus: (state, action) => {
      let { id } = action.payload;
      state.data = state.data.map((loan) =>
        loan.id == id
          ? {
              ...loan,
              status: (loan.status = "Pending"),
            }
          : loan
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoansApplication.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getLoansApplication.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getLoansApplication.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default loansSlice.reducer;
export const { updateStatus, rejectStatus } = loansSlice.actions;
