import { configureStore, createSlice } from "@reduxjs/toolkit"

const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    getToken: (state, action) => {
      return action.payload
    },
  },
})

const firstNameSlice = createSlice({
  name: "firstName",
  initialState: "",
  reducers: {
    getfirstName: (state, action) => {
      return action.payload
    },
  },
})

const LastNameSlice = createSlice({
  name: "lastName",
  initialState: "",
  reducers: {
    getLastName: (state, action) => {
      return action.payload
    },
  },
})

// Actions exportées
export const { getToken } = tokenSlice.actions
export const { getfirstName } = firstNameSlice.actions
export const { getLastName } = LastNameSlice.actions

// Store Redux
export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    firstName: firstNameSlice.reducer,
    lastName: LastNameSlice.reducer,
  },
})
