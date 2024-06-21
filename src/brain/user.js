import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const userToken = localStorage.getItem("userToken");
  const user = await fetch(
    `https://bck-server.onrender.com/api/user/${userToken}`,
    {
      credentials: "include",
    }
  );
  const userData = await user.json();
  return userData.userACcount;
});

const userSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {},
    isAuthenticated: false,
    accountCard: {},
    isLoading: true,
  },
  reducers: {
    updateAddress: (state, action) => {
      const { address, postal, state_ } = action.payload;
      state.user.address = { address, postal, state_ };
    },

    closeAuth: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.accountCard = action.payload.cards[0];
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
export const { updateAddress, userAuthenticator, closeAuth } =
  userSlice.actions;
export default userSlice.reducer;
