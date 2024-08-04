import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Guest',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  }
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
