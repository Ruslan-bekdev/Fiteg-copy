import {createSlice} from "@reduxjs/toolkit";

const siteThemeSlice = createSlice({
    name: 'siteThemeSlice',
    initialState:{
        theme: 0,
    },
    reducers: {
        setTheme: (state,action) => {
            state.theme = action.payload.isDark ?1 :0;
        },
    },
});

export const {
    setTheme
} = siteThemeSlice.actions

export default siteThemeSlice.reducer;