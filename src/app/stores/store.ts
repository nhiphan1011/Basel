import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
    reducer: rootReducer,
})

// Lấy RootState và AppDispatch từ store phục vụ typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
