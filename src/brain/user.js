import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getUser = createAsyncThunk("user/getUser", async () => {
  const user = await fetch("https://bck-server.onrender.com/api/user", {
    credentials: "include",
  });
  const userData = await user.json();
  return userData.userACcount;
});

const userSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {},
    isLoading: true,
  },
  reducers: {
    updateAddress: (state, action) => {
      const { address, postal, state_ } = action.payload;
      state.user.address = { address, postal, state_ };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const { updateAddress } = userSlice.actions;
export default userSlice.reducer;
