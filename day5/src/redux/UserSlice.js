import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: "",
    role: "",
    username: "",
    password: "",
    email: "",
    phone: ""
};

const UserSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setRole(state, action) {
            state.role = action.payload;
        },
        setUsername(state, action) {
            state.username = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        }
    }
});

export const {
    setAuthenticated,
    setRole,
    setToken,
    setUsername,
    setEmail,
    setPhone,
    setPassword
} = UserSlice.actions;
export default UserSlice.reducer;
