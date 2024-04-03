import {createSlice} from "@reduxjs/toolkit";
import languages from "../configs";

const languageTextSlice = createSlice({
    name: 'languageTextSlice',
    initialState:{
        config: null,
        language: null,
    },
    reducers: {
        setNextLanguage: (state) => {
            for (const item of languages) {
                if (item.languageText === state.language) {
                    const index = languages.indexOf(item);
                    if (languages.length - 1 === index) {
                        state.config = languages[0];
                        state.language = languages[0].languageText;
                    } else {
                        state.config = languages[index + 1];
                        state.language = languages[index + 1].languageText;
                    }
                    break;
                }
            }
        },
        setDefaultLanguage: (state,action) => {
            state.config = action.payload;
            state.language = action.payload.languageText;
        },
    },
});

export const {
    setNextLanguage,
    setDefaultLanguage,
} = languageTextSlice.actions

export default languageTextSlice.reducer;