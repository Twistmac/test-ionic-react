import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {clientSlice} from "../features/client/clientSlice";

export const store = configureStore({
    reducer: {
        client: clientSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >
