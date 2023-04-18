import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import createSagaMiddleware from "redux-saga";

// import rootSaga from "./rootSaga";
import rootReducer from './rootReducer'

// const sagaMiddleware = createSagaMiddleware();

// set up rootReducer và middleware
export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware({
    //       serializableCheck: false,
    //     }).concat(sagaMiddleware);
    //   },
})

// sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
