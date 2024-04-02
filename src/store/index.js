import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import landingSlice from "./landingBackSlice";
import languageTextSlice from "./languageTextSlice";

const store = configureStore({
    reducer: {
        landingSlice,
        languageTextSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLogger()),
});

export default store;