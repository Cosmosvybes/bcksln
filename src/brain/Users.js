import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("loans/getUsers", async () => {
  let loans = await fetch("https://bck-server.onrender.com/api/loans/application", {
    credentials: "include",
  });
  let loansData = await loans.json();
  return loansData.usersId;
});
// https://bck-server.onrender.com

const customers = createSlice({
  name: "loans",
  initialState: {
    users: [],
    userLoading: true,
  },
  reducers: {
    updateApproval: (state, action) => {
      let { id } = action.payload;

      state.users = state.users.map((user) =>
        user.email == id
          ? {
              ...user,
              isVerified: (user.isVerified = !user.isVerified),
            }
          : loan
      );
      // },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.userLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.userLoading = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.userLoading = false;
    });
  },
});

export default customers.reducer;
export const { updateApproval } = customers.actions;
