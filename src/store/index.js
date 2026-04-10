import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import landingSlice from "./landingBackSlice";
import languageTextSlice from "./languageTextSlice";
import siteThemeSlice from "./siteThemeSlice";

const store = configureStore({
    reducer: {
        landingSlice,
        languageTextSlice,
        siteThemeSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLogger()),
});

export default store;