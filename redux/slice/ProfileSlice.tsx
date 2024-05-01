import { ProfileProps } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  name: string;
  income: string;
}

const initialState: ProfileState = {
  name: "",
  income: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileState>) {
      state = action.payload;
    },
    changeName(state, action: PayloadAction<string>) {},
    changeSalary(state, action: PayloadAction<string>) {},
  },
});

// Action creators are generated for each case reducer function
export const { setProfile, changeName, changeSalary } = profileSlice.actions;

export default profileSlice.reducer;
