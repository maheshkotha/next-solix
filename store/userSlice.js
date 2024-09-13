import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
  error: false,
  loading: false
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
});

export const getUsers = createAsyncThunk('users/get', async () => {
  try {
      const res = await fetch('/userlist.json'); 
      const result = await res.json();
      return result
    } catch (error) {
      console.error("Error fetching users:", error);
  }
})

export default userSlice.reducer;
