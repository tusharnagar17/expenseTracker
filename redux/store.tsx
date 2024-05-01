import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slice/SessionSlice";
import profileReducer from "./slice/ProfileSlice";

export const ReduxStore = configureStore({
  reducer: {
    session: sessionReducer,
    profile: profileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof ReduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof ReduxStore.dispatch;
