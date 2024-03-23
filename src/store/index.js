import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import landingSlice from "./landingSlice";

const store = configureStore({
    reducer: {
        landingSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLogger()),
});

export default store;