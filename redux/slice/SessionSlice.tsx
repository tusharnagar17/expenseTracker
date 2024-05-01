import { addItemProps } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
  items: addItemProps[];
}

const initialState: SessionState = {
  items: [],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<addItemProps[]>) {
      // console.log("action.payload", action.payload);
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSession } = sessionSlice.actions;

export default sessionSlice.reducer;
