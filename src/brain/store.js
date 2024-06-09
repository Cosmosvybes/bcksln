import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import loansSlice from "./Loans";
import customers from "./Users";

export const store = configureStore({
  reducer: { userSlice, loansSlice, customers },
});
