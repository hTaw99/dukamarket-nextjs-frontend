import { createSlice, current } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialState = {
  status: "unknown",
  user: {
    name: "",
    email: "",
    password: "",
    isAuthenticated: false,
    accessToken: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser(state, { payload }) {
      const { name, email, password, confirmPassword, accessToken } = payload;
      state.user.name = name;
      state.user.email = email;
      state.user.password = password;
      state.user.isAuthenticated = true;
      state.user.accessToken = accessToken;

      state.status = "logged_in";
    },

    setUserOnRefresh(state, { payload }) {
      const { name, email, password } = jwt_decode(payload.accessToken);
      state.user.name = name;
      state.user.email = email;
      state.user.password = password;
      state.user.isAuthenticated = true;
      state.user.accessToken = payload.accessToken;
      state.status = "logged_in";
    },
    logout(state, { payload }) {
      state.user.name = null;
      state.user.email = null;
      state.user.password = null;
      state.user.accessToken = null;
      state.user.isAuthenticated = false;
      state.status = "logged_out";
    },
  },
});

export const { setUser, setUserOnRefresh, logout } = authSlice.actions;
export default authSlice.reducer;
