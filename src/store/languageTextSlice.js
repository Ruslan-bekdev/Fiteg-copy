import {createSlice} from "@reduxjs/toolkit";
import languages, {ru} from "../configs";

const languageTextSlice = createSlice({
    name: 'languageTextSlice',
    initialState:{
        config: ru,
        language: ru.languageText,
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
        }
    },
});

export const {setNextLanguage} = languageTextSlice.actions

export default languageTextSlice.reducer;