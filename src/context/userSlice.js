import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    }
  }
});

export const { saveUserInfo } = userSlice.actions;

export default userSlice.reducer;
